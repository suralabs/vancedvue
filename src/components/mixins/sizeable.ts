import { PropType } from "vue";

const sizeable = {

    props: {
        size: {
            type: String as PropType<"xs" | "sm" | "md" | "lg">,
            default: "md",
        },
    },
    data() {
        return {
            sizes: {
                xs: 'h-8 w-8',
                sm: 'h-10 w-10',
                md: 'h-20 w-20',
                lg: 'h-36 w-36',
                full: "full h-full w-full",
            },
        }
    },
}


export default sizeable;