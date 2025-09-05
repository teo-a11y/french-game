// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000060909090909090909090909090909050301010101010101010101010101010403010101010101010101010b0a01010403010101010101010101010a0a0101040301010101010101010101010101010403010101010101010101010101010104030101010b0b01010101010101010104030101010b0b010101010a0a01010104030101010101010101010a0b0101010403010101010101010101010101010104030101010101010101010101010101040301010101010101010101010a0a010403010a0a01010101010101010b0a010403010b0a0101010101010101010101040301010101010101010101010101010402080808080808080808080808080807`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 . . . 
. . . . . . . . . . . 2 2 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 2 . . . . . . . . . . 
. . . . 2 2 . . . . 2 2 . . . . 
. . . . . . . . . . 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 2 . . 
. . 2 2 . . . . . . . . 2 2 . . 
. . 2 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundNorth,sprites.builtin.brick,sprites.castle.rock1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
