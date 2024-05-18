////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.tags('item', event => {

    const replicator = [
        '#create:toolboxes',
        '#supplementaries:presents',
        '#supplementaries:trapped_presents',
        'ae2:fluid_storage_cell_16k',
        'ae2:fluid_storage_cell_1k',
        'ae2:fluid_storage_cell_256k',
        'ae2:fluid_storage_cell_4k',
        'ae2:fluid_storage_cell_64k',
        'ae2:item_storage_cell_16k',
        'ae2:item_storage_cell_1k',
        'ae2:item_storage_cell_256k',
        'ae2:item_storage_cell_4k',
        'ae2:item_storage_cell_64k',
        'ae2:network_tool',
        'ae2:portable_fluid_cell_16k',
        'ae2:portable_fluid_cell_1k',
        'ae2:portable_fluid_cell_256k',
        'ae2:portable_fluid_cell_4k',
        'ae2:portable_fluid_cell_64k',
        'ae2:portable_item_cell_16k',
        'ae2:portable_item_cell_1k',
        'ae2:portable_item_cell_256k',
        'ae2:portable_item_cell_4k',
        'ae2:portable_item_cell_64k',
        'ae2:quantum_entangled_singularity',
        'ae2:sky_stone_tank',
        'ae2:spatial_storage_cell_128',
        'ae2:spatial_storage_cell_16',
        'ae2:spatial_storage_cell_2',
        'ae2:wireless_crafting_terminal',
        'ae2wtlib:wireless_universal_terminal',
        'appbot:mana_storage_cell_16k',
        'appbot:mana_storage_cell_1k',
        'appbot:mana_storage_cell_256k',
        'appbot:mana_storage_cell_4k',
        'appbot:mana_storage_cell_64k',
        'appbot:portable_mana_storage_cell_16k',
        'appbot:portable_mana_storage_cell_1k',
        'appbot:portable_mana_storage_cell_256k',
        'appbot:portable_mana_storage_cell_4k',
        'appbot:portable_mana_storage_cell_64k',
        'artifacts:eternal_steak',
        'artifacts:everlasting_beef',
        'botania:bauble_box',
        'botania:dice',
        'botania:flugel_eye',
        'botania:infinite_fruit',
        'botania:king_key',
        'botania:loki_ring',
        'botania:mana_ring_greater',
        'botania:mana_ring',
        'botania:mana_tablet',
        'botania:odin_ring',
        'botania:thor_ring',
        'create:chest_minecart_contraption',
        'create:creative_blaze_cake',
        'create:furnace_minecart_contraption',
        'create:minecart_contraption',
        'croptosis:creative_watering_can',
        'dankstorage:dank_1',
        'dankstorage:dank_2',
        'dankstorage:dank_3',
        'dankstorage:dank_4',
        'dankstorage:dank_5',
        'dankstorage:dank_6',
        'dankstorage:dank_7',
        'display_case:display_case',
        'gag:time_sand_pouch',
        'gofish:astral_crate',
        'gofish:diamond_crate',
        'gofish:end_crate',
        'gofish:fiery_crate',
        'gofish:frosted_crate',
        'gofish:gilded_blackstone_crate',
        'gofish:golden_crate',
        'gofish:iron_crate',
        'gofish:slimey_crate',
        'gofish:soul_crate',
        'gofish:supply_crate',
        'gofish:wooden_crate',
        'harvest_scythes:creative_machete',
        'harvest_scythes:creative_scythe',
        'hexcasting:creative_unlocker',
        'indrev:lazuli_flux_container_mk1',
        'indrev:lazuli_flux_container_mk2',
        'indrev:lazuli_flux_container_mk3',
        'indrev:lazuli_flux_container_mk4',
        'indrev:modular_armor_boots',
        'indrev:modular_armor_chest',
        'indrev:modular_armor_helmet',
        'indrev:modular_armor_legs',
        'indrev:portable_charger',
        'indrev:tank',
        'inmis:baby_backpack',
        'inmis:bejeweled_backpack',
        'inmis:blazing_backpack',
        'inmis:endless_backpack',
        'inmis:frayed_backpack',
        'inmis:gilded_backpack',
        'inmis:plated_backpack',
        'inmis:withered_backpack',
        'ironchests:diamond_dolly',
        'ironchests:iron_dolly',
        'kibe:angel_ring',
        'kibe:cooler',
        'kibe:cursed_lasso',
        'kibe:diamond_lasso',
        'kibe:golden_lasso',
        'kibe:tank',
        'lootbags:loot_bag',
        'luggage:luggage',
        'megacells:bulk_item_cell',
        'megacells:fluid_storage_cell_16m',
        'megacells:fluid_storage_cell_1m',
        'megacells:fluid_storage_cell_256m',
        'megacells:fluid_storage_cell_4m',
        'megacells:fluid_storage_cell_64m',
        'megacells:item_storage_cell_16m',
        'megacells:item_storage_cell_1m',
        'megacells:item_storage_cell_256m',
        'megacells:item_storage_cell_4m',
        'megacells:item_storage_cell_64m',
        'megacells:mega_energy_cell',
        'megacells:portable_fluid_cell_16m',
        'megacells:portable_fluid_cell_1m',
        'megacells:portable_fluid_cell_256m',
        'megacells:portable_fluid_cell_4m',
        'megacells:portable_fluid_cell_64m',
        'megacells:portable_item_cell_16m',
        'megacells:portable_item_cell_1m',
        'megacells:portable_item_cell_256m',
        'megacells:portable_item_cell_4m',
        'megacells:portable_item_cell_64m',
        'minecraft:dragon_egg',
        'modern_industrialization:quantum_boots',
        'modern_industrialization:quantum_chestplate',
        'modern_industrialization:quantum_helmet',
        'modern_industrialization:quantum_leggings',
        'modern_industrialization:quantum_sword',
        'modern_industrialization:replicator',
        'modern_industrialization:singularity',
        'portable_tables:portable_furnace',
        'portable_tables:portable_blast_furnace',
        'powah:battery_basic',
        'powah:battery_blazing',
        'powah:battery_hardened',
        'powah:battery_niotic',
        'powah:battery_nitro',
        'powah:battery_spirited',
        'powah:battery_starter',
        'spectrum:gloves_of_dawns_grasp',
        'spectrum:heartsingers_reward',
        'spectrum:present',
        'spectrum:shieldgrasp_amulet',
        'supplementaries:cage',
        'supplementaries:sack',
        'supplementaries:safe',
        'techreborn:adjustable_su',
        'techreborn:advanced_storage_unit',
        'techreborn:advanced_tank_unit',
        'techreborn:alloy_smelter',
        'techreborn:assembly_machine',
        'techreborn:auto_crafting_table',
        'techreborn:basic_storage_unit',
        'techreborn:basic_tank_unit',
        'techreborn:block_breaker',
        'techreborn:block_placer',
        'techreborn:charge_o_mat' ,
        'techreborn:chemical_reactor',
        'techreborn:compressor',
        'techreborn:creative_tank_unit',
        'techreborn:crude_storage_unit',
        'techreborn:diesel_generator',
        'techreborn:distillation_tower',
        'techreborn:electric_furnace',
        'techreborn:extractor',
        'techreborn:fluid_replicator',
        'techreborn:fusion_control_computer',
        'techreborn:gas_turbine',
        'techreborn:greenhouse_controller',
        'techreborn:grinder',
        'techreborn:heliumplasma_bucket',
        'techreborn:high_voltage_su',
        'techreborn:implosion_compressor',
        'techreborn:industrial_blast_furnace',
        'techreborn:industrial_centrifuge',
        'techreborn:industrial_electrolyzer',
        'techreborn:industrial_grinder',
        'techreborn:industrial_sawmill',
        'techreborn:industrial_storage_unit',
        'techreborn:industrial_tank_unit',
        'techreborn:interdimensional_su',
        'techreborn:iron_alloy_furnace',
        'techreborn:iron_furnace',
        'techreborn:lapotronic_orbpack',
        'techreborn:lapotronic_su',
        'techreborn:low_voltage_su',
        'techreborn:matter_fabricator',
        'techreborn:medium_voltage_su',
        'techreborn:nuke',
        'techreborn:plasma_generator',
        'techreborn:quantum_boots',
        'techreborn:quantum_chestplate',
        'techreborn:quantum_helmet',
        'techreborn:quantum_leggings',
        'techreborn:quantum_storage_unit',
        'techreborn:quantum_tank_unit',
        'techreborn:recycler',
        'techreborn:rolling_machine',
        'techreborn:scrap_box',
        'techreborn:scrapboxinator',
        'techreborn:semi_fluid_generator',
        'techreborn:solid_canning_machine',
        'techreborn:storage_buffer',
        'techreborn:thermal_generator',
        'techreborn:uu_matter',
        'techreborn:vacuum_freezer',
        'techreborn:wire_mill',
        'the_bumblezone:honey_cocoon',
        'travelersbackpack:bat',
        'travelersbackpack:bee',
        'travelersbackpack:blaze',
        'travelersbackpack:bookshelf',
        'travelersbackpack:cactus',
        'travelersbackpack:cake',
        'travelersbackpack:chicken',
        'travelersbackpack:coal',
        'travelersbackpack:cow',
        'travelersbackpack:creeper',
        'travelersbackpack:diamond',
        'travelersbackpack:dragon',
        'travelersbackpack:emerald',
        'travelersbackpack:end',
        'travelersbackpack:enderman',
        'travelersbackpack:fox',
        'travelersbackpack:ghast',
        'travelersbackpack:gold',
        'travelersbackpack:hay',
        'travelersbackpack:horse',
        'travelersbackpack:iron_golem',
        'travelersbackpack:iron',
        'travelersbackpack:lapis',
        'travelersbackpack:magma_cube',
        'travelersbackpack:melon',
        'travelersbackpack:nether',
        'travelersbackpack:netherite',
        'travelersbackpack:ocelot',
        'travelersbackpack:pig',
        'travelersbackpack:pumpkin',
        'travelersbackpack:quartz',
        'travelersbackpack:redstone',
        'travelersbackpack:sandstone',
        'travelersbackpack:sheep',
        'travelersbackpack:skeleton',
        'travelersbackpack:snow',
        'travelersbackpack:spider',
        'travelersbackpack:sponge',
        'travelersbackpack:squid',
        'travelersbackpack:standard',
        'travelersbackpack:villager',
        'travelersbackpack:wither',
        'travelersbackpack:wolf',
        'wands:creative_wand',
        'wands:diamond_wand',
        'wands:iron_wand',
        'wands:magic_bag_1',
        'wands:magic_bag_2',
        'wands:magic_bag_3',
        'wands:netherite_wand',
        'wands:palette',
        'wands:stone_wand',
        'xps:block_xp_obelisk'
    ];

    replicator.forEach((item) => {
        event.add('modern_industrialization:replicator_blacklist', item)
    });

});
