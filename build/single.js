const { exec } = require('child_process');

const files = [
  'services/notification/Notification.js',
  'directives/popover/popover.js',
  'directives/scrollspy/scrollspy.js',
  'directives/tooltip/tooltip.js',
  'components/alert/v-alert.vue',
  'components/avatar/v-avatar.vue',
  'components/badge/v-badge.vue',
  'components/button/v-button.vue',
  // 'components/card/v-card.vue',
  // 'components/dropdown/v-dropdown.vue',
  'components/icon/v-icon.vue',
  'components/input/v-input.vue',
  'components/modal/v-modal.vue',
  // 'components/notifications/v-notifications.vue',
  'components/pagination/v-pagination.vue',
  'components/toltipe/v-toltipe.vue',
];

function e(command, options) {
  return new Promise((resolve, reject) => {
    exec(command, options, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        reject(error);
        process.exit(1);
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      resolve();
    });
  });
}

(async function () {
  for (const file of files) {
    const prefix = file.startsWith('directives') ? 'v_' : '';

    await e('npx vite build -c build/vite.config.js', {
      env: {
        ...process.env,
        VANCEDVUE_ENTRY: file,
        VANCEDVUE_FILENAME: `${
          prefix + file.split('/').pop().split('.')[0]
        }.js`,
      },
    });
  }
})();
