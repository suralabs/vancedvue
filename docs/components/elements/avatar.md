# Avatar

> Display an alert element to draw attention.

## Examples

Add an avatar easily and with functionality with the component `<v-avatar>`

<SContainer>
<SAvatar/>
</SContainer>

<<< @/.vitepress/components/avatar/SAvatar.vue

## Sizes

Change the size of the component to the number provided if for the size value 

<SContainer>
<SAvatarSize/>
</SContainer>

<<< @/.vitepress/components/avatar/SAvatarSize.vue

## Badge

Add a badge to the component with the `status` property 

<SContainer>
<SAvatarBadge/>
</SContainer>

<<< @/.vitepress/components/avatar/SAvatarBadge.vue

## Auto font and split

If the user has a short name, it is added as it is but if it is a very long text or has several spaces, the text to be displayed will be automatically generated so that it can be seen correctly

<SContainer>
<SAvatarFont/>
</SContainer>

<<< @/.vitepress/components/avatar/SAvatarFont.vue

## No image

<SContainer>
<SAvatarNo/>
</SContainer>

<<< @/.vitepress/components/avatar/SAvatarNo.vue

## Group

You can group several avatar with the parent component `<v-avatar-group>`, this component has two interesting properties:

max: determine the maximum number of avatars to show and the rest hides it generating the number in the last avatar shown

float: causes the avatar components to be placed on each other and the grouping of one on top of the other is eliminated

<SContainer>
<SAvatarGroup/>
</SContainer>

<<< @/.vitepress/components/avatar/SAvatarGroup.vue
