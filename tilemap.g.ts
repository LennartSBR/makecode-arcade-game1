// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000102020202020202020202020202020304050505050505050505050505050506070c0c0c0c0c0c0c0c0c0c0c0c0c0c0b070c0c0c0c0c0c0c0c0c0c0c0c0c0c0b070c0c0c0c0c0c0c0c0c0c0c0c0c0c0b070c0c0c0c0c0c0c0c0c0c0c0c0c0c0b070c0c0c0c0c0c0c0c0c0c0c0c0c0c0b070c0c0c0c0c0c0c0c0c0c0c0c0c0c0b070c0c0c0c0c0c0c0c0c0c0c0c0c0c0b070c0c0c0c0c0c0c0c0c0c0c0c0c0c0b070c0c0c0c0c0c0c0c0c0c0c0c0c0c0b0809090909090909090909090909090a`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles1,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.builtin.forestTiles5,sprites.builtin.forestTiles6,sprites.builtin.forestTiles7,sprites.builtin.forestTiles9,sprites.builtin.forestTiles13,sprites.builtin.forestTiles14,sprites.builtin.forestTiles15,sprites.builtin.forestTiles11,sprites.builtin.forestTiles10], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
