AFRAME.registerComponent('change-color', {
    schema: {
        normal: {type: 'string', default: 'red'},
        hover: {type: 'string', default: 'green'}
    },
    init: function() {
        const el = this.el; // Reference the entity where the component is attached to
        const normalColor = this.data.normal;
        const hoverColor = this.data.hover;

        el.addEventListener('mouseenter', () => {
            // update single property of multi-property component
            // property color of component material
            el.setAttribute('material', 'color', hoverColor);
        });

        el.addEventListener('mouseleave', () => {
            el.setAttribute('material', 'color', normalColor);
        });
    }
});