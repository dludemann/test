<script>
export default {
  props: ["block", "dataBinding"],
};
</script>

<template v-if="formattedPage">
    <section
        :data-cms-bind="dataBinding"
    >    
        <component
            v-for="(element, index) in block.case_study_elements"
            :is="element._bookshop_name"
            :block="element"
        ></component>
    </section>
</template>