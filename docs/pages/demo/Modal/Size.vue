<template>
<Button @click="showModal = true">Show modal</Button>
<Button @click="showModal = true">Show modal</Button>
<Button @click="showModal = true">Show modal</Button>

<Teleport to="body">
  <Modal :show="showModal" @close="showModal = false">
  </Modal>
</Teleport> 
<Teleport to="body">
  <Modal size="xl" :show="showModal2" @close="showModal2 = false">
  </Modal>
</Teleport> 
<Teleport to="body">
  <Modal size="5xl" :show="showModal3" @close="showModal3 = false">
  </Modal>
</Teleport> 
</template>

<script>
export default {
    name:'ModalLang',
    data() {
        return {         
            showModal: false,
            showModal2: false,
            showModal3: false,
        }
    },
}
</script>