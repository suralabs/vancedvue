# Avatar

> Display an alert element to draw attention.

## Examples

Add an avatar easily and with functionality with the component `<v-avatar>`

<DemoContainer>
<div class="flex justify-center space-x-4">
  <v-avatar img="https://avatars.githubusercontent.com/u/22177963?v=4"></v-avatar>
  <v-avatar rounded img="https://avatars.githubusercontent.com/u/22177963?v=4"></v-avatar>
</div>
</DemoContainer>

<<< @/components/demo/avatar/Basic.vue

## Sizes

Change the size of the component to the number provided if for the size value 

<DemoContainer>
<div class="flex justify-center items-center space-x-4">
  <v-avatar size="xs" img="https://avatars.githubusercontent.com/u/22177963?v=4"></v-avatar>
  <v-avatar size="sm" img="https://avatars.githubusercontent.com/u/22177963?v=4"></v-avatar>
  <v-avatar size="md" img="https://avatars.githubusercontent.com/u/22177963?v=4"></v-avatar>
  <v-avatar size="lg" img="https://avatars.githubusercontent.com/u/22177963?v=4"></v-avatar>
  <v-avatar size="xl" img="https://avatars.githubusercontent.com/u/22177963?v=4"></v-avatar>
</div>
</DemoContainer>

## Badge

Add a badge to the component with the `status` property 

<DemoContainer>
<div class="flex justify-center space-x-4">
  <v-avatar status="busy" statusPosition="top-left" img="https://avatars.githubusercontent.com/u/22177963?v=4"></v-avatar>
  <v-avatar status="online" img="https://avatars.githubusercontent.com/u/22177963?v=4"></v-avatar>
  <v-avatar status="away" statusPosition="bottom-left" img="https://avatars.githubusercontent.com/u/22177963?v=4"></v-avatar>
  <v-avatar status="offline" statusPosition="bottom-right" rounded img="https://avatars.githubusercontent.com/u/22177963?v=4"></v-avatar>
</div>
</DemoContainer>

## Auto font and split

If the user has a short name, it is added as it is but if it is a very long text or has several spaces, the text to be displayed will be automatically generated so that it can be seen correctly

<DemoContainer>
<div class="flex justify-center space-x-4">
  <v-avatar initials="JD"></v-avatar>
  <v-avatar initials="JD" rounded></v-avatar>
</div>
</DemoContainer>

## No image

<DemoContainer>
<div class="flex justify-center space-x-4">
  <v-avatar ></v-avatar>
  <v-avatar rounded></v-avatar>
</div>
</DemoContainer>

## Group

You can group several avatar with the parent component `<v-avatar-group>`, this component has two interesting properties:

max: determine the maximum number of avatars to show and the rest hides it generating the number in the last avatar shown

float: causes the avatar components to be placed on each other and the grouping of one on top of the other is eliminated

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
