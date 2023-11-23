# Avatar

> Display an alert element to draw attention.

## Examples

Use any of the available button types to quickly create a styled button.

<DemoContainer>
<div class="flex justify-center space-x-4">
  <v-avatar img="https://avatars.githubusercontent.com/u/22177963?v=4"></v-avatar>
  <v-avatar rounded img="https://avatars.githubusercontent.com/u/22177963?v=4"></v-avatar>
</div>
</DemoContainer>

<<< @/components/demo/avatar/Basic.vue

<DemoContainer>
<div class="flex justify-center items-center space-x-4">
  <v-avatar size="xs" img="https://avatars.githubusercontent.com/u/22177963?v=4"></v-avatar>
  <v-avatar size="sm" img="https://avatars.githubusercontent.com/u/22177963?v=4"></v-avatar>
  <v-avatar size="md" img="https://avatars.githubusercontent.com/u/22177963?v=4"></v-avatar>
  <v-avatar size="lg" img="https://avatars.githubusercontent.com/u/22177963?v=4"></v-avatar>
  <v-avatar size="xl" img="https://avatars.githubusercontent.com/u/22177963?v=4"></v-avatar>
</div>
</DemoContainer>

<DemoContainer>
<div class="flex justify-center space-x-4">
  <v-avatar status="busy" statusPosition="top-left" img="https://avatars.githubusercontent.com/u/22177963?v=4"></v-avatar>
  <v-avatar status="online" img="https://avatars.githubusercontent.com/u/22177963?v=4"></v-avatar>
  <v-avatar status="away" statusPosition="bottom-left" img="https://avatars.githubusercontent.com/u/22177963?v=4"></v-avatar>
  <v-avatar status="offline" statusPosition="bottom-right" rounded img="https://avatars.githubusercontent.com/u/22177963?v=4"></v-avatar>
</div>
</DemoContainer>

<DemoContainer>
<div class="flex justify-center space-x-4">
  <v-avatar initials="JD"></v-avatar>
  <v-avatar initials="JD" rounded></v-avatar>
</div>
</DemoContainer>

<DemoContainer>
<div class="flex justify-center space-x-4">
  <v-avatar ></v-avatar>
  <v-avatar rounded></v-avatar>
</div>
</DemoContainer>

<DemoContainer>
<div class="vp-raw grid gap-2">
  <v-avatar-group>
    <v-avatar rounded img="https://avatars.githubusercontent.com/u/22177963?v=4"></v-avatar>
    <v-avatar rounded ></v-avatar>
    <v-avatar rounded initials="JD"></v-avatar>
    <v-avatar rounded initials="+99"></v-avatar>
  </v-avatar-group>
</div>
</DemoContainer>

#### Props

#### Slots

#### Events

