
const DELETED_ITEMS = [
    "croptopia:cabbage_seed",
    "techreborn:deepslate_tin_ore",
    "techreborn:tin_ore",
    "indrev:deepslate_tin_ore",
    "indrev:tin_ore",
    "techreborn:emerald_dust",
    "techreborn:emerald_plate",
    "ad_astra:mars_diamond_ore",
    "ad_astra:venus_diamond_ore",
    "deeperdarker:sculk_stone_diamond_ore",
    "indrev:coal_dust",
    "techreborn:coal_dust",
    "techreborn:nickel_storage_block",
    "techreborn:chrome_ingot",
    "croptopia:rice",
    "techreborn:iridium_ore",
    "techreborn:deepslate_iridium_ore",
    "indrev:bronze_dust",
    "techreborn:bronze_dust",
    "techreborn:steel_storage_block",
    "ad_astra:steel_block",
    "indrev:steel_block",
    "deeperdarker:sculk_stone_lapis_ore",
    "ad_astra:glacio_lapis_ore",
    "tinycoal:tinycharcoal",
    "indrev:lead_plate",
    "techreborn:lead_plate",
    "techreborn:raw_tungsten_storage_block",
    "indrev:raw_tungsten_block",
    "croptopia:rice_seed",
    "indrev:silver_ingot",
    "techreborn:silver_ingot",
    "bewitchment:silver_ingot",
    "techreborn:aluminum_plate",
    "techreborn:chrome_plate",
    "techreborn:nickel_nugget",
    "techreborn:titanium_nugget",
    "create:crushed_copper_ore",
    "indrev:copper_dust",
    "indrev:silver_plate",
    "techreborn:silver_plate",
    "techreborn:platinum_plate",
    "techreborn:electrum_storage_block",
    "indrev:electrum_block",
    "indrev:raw_silver_block",
    "techreborn:raw_silver_storage_block",
    "bewitchment:raw_silver_block",
    "techreborn:lead_ingot",
    "indrev:lead_ingot",
    "techreborn:diamond_dust",
    "indrev:diamond_dust",
    "techreborn:iridium_ingot",
    "techreborn:tungsten_nugget",
    "indrev:tungsten_nugget",
    "techreborn:platinum_nugget",
    "techreborn:brass_plate",
    "indrev:steel_ingot",
    "techreborn:steel_ingot",
    "ad_astra:steel_ingot",
    "techreborn:nickel_ingot",
    "indrev:tin_plate",
    "techreborn:tin_plate",
    "indrev:steel_nugget",
    "ad_astra:steel_nugget",
    "techreborn:steel_nugget",
    "hexcasting:amethyst_dust",
    "techreborn:nickel_plate",
    "techreborn:quartz_dust",
    "techreborn:brass_ingot",
    "croptopia:cabbage",
    "farmersdelight:cabbage_leaf",
    "techreborn:zinc_nugget",
    "techreborn:deepslate_bauxite_ore",
    "techreborn:bauxite_ore",
    "techreborn:titanium_storage_block",
    "techreborn:aluminum_ingot",
    "deeperdarker:sculk_stone_copper_ore",
    "ad_astra:glacio_copper_ore",
    "indrev:iron_plate",
    "create:iron_sheet",
    "techreborn:iron_plate",
    "ad_astra:iron_plate",
    "techreborn:aluminum_dust",
    "techreborn:iridium_plate",
    "techreborn:sulfur_dust",
    "indrev:sulfur_dust",
    "techreborn:lead_ore",
    "indrev:lead_ore",
    "indrev:deepslate_lead_ore",
    "techreborn:deepslate_lead_ore",
    "indrev:tungsten_dust",
    "techreborn:chrome_storage_block",
    "bewitchment:salt",
    "techreborn:raw_lead_storage_block",
    "indrev:raw_lead_block",
    "indrev:raw_silver",
    "techreborn:raw_silver",
    "techreborn:bronze_storage_block",
    "indrev:bronze_block",
    "techreborn:zinc_ingot",
    "techreborn:invar_dust",
    "techreborn:platinum_storage_block",
    "techreborn:carbon_plate",
    "techreborn:titanium_plate",
    "techreborn:aluminum_storage_block",
    "techreborn:iridium_storage_block",
    "techreborn:bauxite_dust",
    "indrev:copper_plate",
    "create:copper_sheet",
    "techreborn:copper_plate",
    "indrev:bronze_ingot",
    "techreborn:bronze_ingot",
    "techreborn:raw_lead",
    "indrev:raw_lead",
    "indrev:steel_plate",
    "ad_astra:steel_plate",
    "techreborn:steel_plate",
    "techreborn:tin_storage_block",
    "indrev:tin_block",
    "indrev:silver_nugget",
    "bewitchment:silver_nugget",
    "techreborn:silver_nugget",
    "techreborn:invar_nugget",
    "bewitchment:salt_block",
    "techreborn:raw_tin",
    "indrev:raw_tin",
    "ad_astra:venus_gold_ore",
    "byg:blue_nether_gold_ore",
    "deeperdarker:sculk_stone_gold_ore",
    "byg:brimstone_nether_gold_ore",
    "techreborn:bronze_nugget",
    "indrev:bronze_nugget",
    "techreborn:lapis_plate",
    "techreborn:iridium_nugget",
    "techreborn:nickel_dust",
    "techreborn:raw_iridium",
    "techreborn:platinum_ingot",
    "indrev:lead_dust",
    "techreborn:silicon_plate",
    "techreborn:diamond_plate",
    "indrev:gold_dust",
    "create:crushed_gold_ore",
    "indrev:silver_dust",
    "indrev:tungsten_block",
    "techreborn:tungsten_storage_block",
    "indrev:tin_ingot",
    "techreborn:tin_ingot",
    "techreborn:chrome_dust",
    "indrev:deepslate_tungsten_ore",
    "indrev:tungsten_ore",
    "techreborn:tungsten_ore",
    "techreborn:deepslate_tungsten_ore",
    "ad_astra:glacio_coal_ore",
    "ad_astra:venus_coal_ore",
    "deeperdarker:sculk_stone_coal_ore",
    "techreborn:invar_storage_block",
    "techreborn:manganese_dust",
    "techreborn:bronze_plate",
    "indrev:bronze_plate",
    "techreborn:lead_storage_block",
    "indrev:lead_block",
    "deeperdarker:sculk_stone_emerald_ore",
    "techreborn:platinum_dust",
    "deeperdarker:sculk_stone_iron_ore",
    "ad_astra:mercury_iron_ore",
    "ad_astra:moon_iron_ore",
    "ad_astra:mars_iron_ore",
    "ad_astra:glacio_iron_ore",
    "techreborn:raw_tin_storage_block",
    "indrev:raw_tin_block",
    "techreborn:zinc_storage_block",
    "indrev:electrum_plate",
    "techreborn:electrum_plate",
    "indrev:tin_nugget",
    "techreborn:tin_nugget",
    "techreborn:raw_iridium_storage_block",
    "techreborn:lead_nugget",
    "indrev:lead_nugget",
    "techreborn:gold_plate",
    "create:golden_sheet",
    "indrev:gold_plate",
    "techreborn:steel_dust",
    "indrev:steel_dust",
    "techreborn:zinc_dust",
    "croptopia:tomato",
    "croptopia:salt_ore",
    "bewitchment:deepslate_salt_ore",
    "bewitchment:salt_ore",
    "techreborn:electrum_dust",
    "indrev:electrum_dust",
    "techreborn:ruby_dust",
    "techreborn:titanium_dust",
    "indrev:iron_dust",
    "create:crushed_iron_ore",
    "techreborn:titanium_ingot",
    "indrev:electrum_nugget",
    "techreborn:electrum_nugget",
    "techreborn:electrum_ingot",
    "indrev:electrum_ingot",
    "ad_astra:iron_rod",
    "catwalksinc:iron_rod",
    "indrev:deepslate_silver_ore",
    "bewitchment:deepslate_silver_ore",
    "indrev:silver_ore",
    "bewitchment:silver_ore",
    "croptopia:onion",
    "bewitchment:silver_block",
    "indrev:silver_block",
    "techreborn:silver_storage_block",
    "techreborn:invar_ingot",
    "techreborn:raw_tungsten",
    "indrev:raw_tungsten",
    "indrev:tin_dust",
    "techreborn:invar_plate",
    "techreborn:tungsten_ingot",
    "indrev:tungsten_ingot",
    "techreborn:aluminum_nugget",
    "techreborn:chrome_nugget",
    "techreborn:tungsten_plate",
    "indrev:tungsten_plate",
    "techreborn:copper_nugget",
    "indrev:copper_nugget",
    "croptopia:tomato_seed",
    "techreborn:ender_pearl_dust",
    "create:copper_sheet",
    "techreborn:brass_nugget"
];
REIEvents.hide('item', (event) => {
    DELETED_ITEMS.forEach(id => event.hide(id));
});
