AFRAME.registerComponent('hello', {
    schema: {
        name: {type: 'string', default: 'world'}
    },
    init: function() {
        console.log(`hello ${this.data.name}`);
    }
});