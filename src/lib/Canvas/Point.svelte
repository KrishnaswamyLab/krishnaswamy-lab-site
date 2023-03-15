<script>
    import { Layer } from 'svelte-canvas';
    import { spring, tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    export let x = 0,
      y = 0,
      r = 1,
      fill = 'black',
      stroke = null,
      strokeWidth = 1;
  
    // const radius = spring(r, { stiffness: 0.15, damping: 0.3 });
    const radius = tweened(r, {duration: 100, easing: cubicOut})
    $: radius.set(r);
  
    $: render = ({ context }) => {
      context.fillStyle = fill;
      context.beginPath();
      try {
        context.arc(x, y, Math.max(0, $radius), 0, 2 * Math.PI);
      } catch (error) {
        console.error(x, y, $radius, )
        context.arc(x, y, 1 + strokeWidth / 2, 0, 2 * Math.PI);
      }
      context.fill();
  
      if (stroke) {
        context.strokeStyle = stroke;
        context.lineWidth = strokeWidth;
        context.beginPath();
        try {
            context.arc(x, y, Math.max(0, $radius) + strokeWidth / 2, 0, 2 * Math.PI);
        } catch (error) {
            console.error(x, y, $radius, )
            context.arc(x, y, 1 + strokeWidth / 2, 0, 2 * Math.PI);
        }        
        context.stroke();
      }
    };

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    function mousemove() {
        // console.log('moved')
		dispatch('hover');
	}
  </script>
  
  <Layer 
    {render}  
    on:mousemove={()=>mousemove()}     
  />
  