<template>
      <Badge bgColor="bg-red-200" textColor="text-red-700"> +9 </Badge>
      <Badge bgColor="bg-red-500" textColor="text-red-200"> +99 </Badge>

      <Avatar
          src="https://i.pravatar.cc/200?img=56"
          variant="rounded-full"
          class="row-start-1 bg-navy-blue-200 text-navy-blue-650"
        >
          <template #badge>
            <Badge shape="rounded-full" size="md"></Badge>
          </template>
        </Avatar>
</template>
