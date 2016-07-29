Hscode.create!([
  {id: 1,
   code: 65050000,
   description: "Hats & other headgear, knitted or crocheted, or ma...",
   unit: "",
   special_permission: "",
   duty: 30,
   excise: 0,
   vat: 15,
   sur: 10,
   withhold: 3,
   ss1: 0,
   ss2: 0
  },
  {id: 2,
   code: 3034400,
   description: "FLAT FISH...FROZEN, BIGEYE TUNAS (THUNNUS OBESUS)",
   unit: "",
   special_permission: "MOH",
   duty: 20,
   excise: 0,
   vat: 15,
   sur: 10,
   withhold: 3,
   ss1: 0,
   ss2: 0
  },
  {id: 3,
   code: 74072200,
   description: "Bars, rods and profiles of cupro nickel or nickel ...",
   unit: "",
   special_permission: "",
   duty: 10,
   excise: 0,
   vat: 15,
   sur: 10,
   withhold: 3,
   ss1: 0,
   ss2: 0
  },
  {id: 4,
   code: 20097990,
   description: "Other Apple concentrate",
   unit: "",
   special_permission: "MOH&Q_STD",
   duty: 30,
   excise: 0,
   vat: 15,
   sur: 10,
   withhold: 3,
   ss1: 0,
   ss2: 0
  },
  {id: 5,
   code: 55095900,
   description: "Yarn, {85 polyester staple fibres, nes,nprs",
   unit: "",
   special_permission: "",
   duty: 20,
   excise: 0,
   vat: 15,
   sur: 10,
   withhold: 3,
   ss1: 5,
   ss2: 0
  }
])


Import.create!([
  {
    id: 1,
   hscode_id: 1,
   year: 2016,
   code: 65050000,
   description: "Hats & other headgear, knitted or crocheted, or ma...",
   country_origin: "United Kingdom",
   country_consignment: "United Kingdom",
   net_mass: rand(500..50000),
    cif_usd: rand(10000..1000000),
    cif_etb: rand(200000..20000000) 
  },

   {
    id: 2,
    hscode_id: 1,
    year: 2016,
    code: 65050000,
    description: "Hats & other headgear, knitted or crocheted, or ma...",
    country_origin: "Ukraine",
    country_consignment: "Holy See (Vatican)",
    net_mass: rand(500..50000),
    cif_usd: rand(10000..1000000),
    cif_etb: rand(200000..20000000) 
  },

   {
    id: 3,
    hscode_id: 1,
    year: 2016,
    code: 65050000,
    description: "Hats & other headgear, knitted or crocheted, or ma...",
    country_origin: "Turkey",
    country_consignment: "Saudi Arabia",
    net_mass: rand(500..50000),
    cif_usd: rand(10000..1000000),
    cif_etb: rand(200000..20000000) 
  },
  {
    id: 4,
   hscode_id: 3,
   year: 2007,
   code: 74072200,
   description: "Bars, rods and profiles of cupro nickel or nickel ...",
   country_origin: "China",
   country_consignment: "China",
   net_mass: rand(500..50000),
    cif_usd: rand(10000..1000000),
    cif_etb: rand(200000..20000000) 
  },

   {
    id: 5,
    hscode_id: 3,
    year: 2007,
    code: 74072200,
    description: "Bars, rods and profiles of cupro nickel or nickel ...",
    country_origin: "India",
    country_consignment: "India",
    net_mass: rand(500..50000),
    cif_usd: rand(10000..1000000),
    cif_etb: rand(200000..20000000) 
  },

   {
    id: 6,
    hscode_id: 3,
    year: 2005,
    code: 74072200,
    description: "Bars, rods and profiles of cupro nickel or nickel ...",
    country_origin: "Italy",
    country_consignment: "Italy",
    net_mass: rand(500..50000),
    cif_usd: rand(10000..1000000),
    cif_etb: rand(200000..20000000) 
  },
  {
    id: 7,
   hscode_id: 4,
   year: 2016,
   code: 20097990,
   description: "Other Apple concentrate",
   country_origin: "Egypt",
   country_consignment: "Egypt",
   net_mass: rand(500..50000),
    cif_usd: rand(10000..1000000),
    cif_etb: rand(200000..20000000)
  },
  {
    id: 8,
    hscode_id: 4,
    year: 2016,
    code: 20097990,
    description: "Other Apple concentrate",
    country_origin: "Belgium",
    country_consignment: "Belgium",
    net_mass: rand(500..50000),
    cif_usd: rand(10000..1000000),
    cif_etb: rand(200000..20000000) 
  },
  {
    id: 9,
    hscode_id: 4,
    year: 2016,
    code: 20097990,
    description: "Other Apple concentrate",
    country_origin: "United Arab Emirates",
    country_consignment: "United Arab Emirates",
    net_mass: rand(500..50000),
    cif_usd: rand(10000..1000000),
    cif_etb: rand(200000..20000000) 
  }
])

Export.create!([
  {
   id: 1,
   hscode_id: 5,
   year: 2013,
   code: 55095900,
   description: "Yarn, {85 polyester staple fibres, nes,nprs",
   destination: "Turkey",
   net_mass: rand(500..50000),
    fob_usd: rand(10000..1000000),
    fob_etb: rand(200000..20000000)
  },
  {
    id: 2,
    hscode_id: 5,
    year: 2009,
    code: 55095900,
    description: "Yarn, {85 polyester staple fibres, nes,nprs",
    destination: "Cameroon",
    net_mass: rand(500..50000),
    fob_usd: rand(10000..1000000),
    fob_etb: rand(200000..20000000)
  },
  {
    id: 3,
    hscode_id: 1,
    year: 2015,
    code: 65050000,
    description: "Hats & other headgear, knitted or crocheted, or ma...",
    destination: "Congo",
    net_mass: rand(500..50000),
    fob_usd: rand(10000..1000000),
    fob_etb: rand(200000..20000000)  },
  {
    id: 4,
    hscode_id: 1,
    year: 2014,
    code: 65050000,
    description: "Hats & other headgear, knitted or rocheted, or ma...",
    destination: "Israel",
    net_mass: rand(500..50000),
    fob_usd: rand(10000..1000000),
    fob_etb: rand(200000..20000000)  }
])
