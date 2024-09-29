ServerEvents.tags('item', event => {

//tag nas shafts do encased
    const tagShaft = [
        'createcasing:crimson_shaft', 
        'createcasing:warped_shaft', 
        'createcasing:cherry_shaft', 
        'createcasing:bamboo_shaft', 
        'createcasing:mangrove_shaft', 
        'createcasing:dark_oak_shaft', 
        'createcasing:acacia_shaft', 
        'createcasing:jungle_shaft', 
        'createcasing:birch_shaft', 
        'createcasing:spruce_shaft', 
        'createcasing:oak_shaft'
        //'create:shaft'
    ];
    function colocarTag(tagShaft) {
        tagShaft.forEach(item => {
            event.add('forge:shafts', item);
        });
    }
    colocarTag(tagShaft);


//outras tags
})