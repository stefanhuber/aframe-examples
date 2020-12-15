AFRAME.registerComponent('goto', {
    schema: {        
        fade: { type: 'number', default: 750}
    },
    init: function() {
        const camera = document.querySelector('#camera');
        const sphere = document.querySelector('#sphere');
        const pos = this.el.getAttribute('position');
        
        this.el.addEventListener('mouseenter', () => {       
            const newCameraPos = `${pos.x} ${camera.getAttribute('position').y} ${pos.z}`;
            sphere.setAttribute('visible', true);           
            sphere.setAttribute('position', camera.getAttribute('position'));
            sphere.setAttribute('animation', {
                property: 'opacity',
                from: 0,
                to: 1,
                dur: this.data.fade,
                easing: 'linear',
                dir: 'alternate',
                loop: 1
            });

            setTimeout(() => {
                camera.setAttribute('position', newCameraPos);
                sphere.setAttribute('position', camera.getAttribute('position'));
                
                setTimeout(() => {
                    sphere.setAttribute('visible', false);
                    sphere.removeAttribute('animation');
                }, this.data.fade);
            }, this.data.fade);
        });
    }
});