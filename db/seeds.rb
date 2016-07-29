Hscode.create!([
  {
    id: 1,
    code: 20011000,
    description: "Printers",
    unit: "pce",
    special_permission: "None",
    duty: 10,
    excise: 5,
    vat: 15,
    sur: 5,
    withhold: 3,
    ss1: 0,
    ss2: 0
  },
  {
    id: 2,
    code: 10011000,
    description: "Pumpkin Pies of width > 10m.",
    unit: "pie",
    special_permission: "Bakeries",
    duty: 10,
    excise: 5,
    vat: 15,
    sur: 5,
    withhold: 3,
    ss1: 0,
    ss2: 0
  }
])

Import.create!([
  {
    hscode_id: 1,
    year: 2016,
    code: 20011000,
    description: "Printers",
    country_origin: "China",
    country_consignment: "China",
    net_mass: 2000.00,
    cif_usd: 2000000.00,
    cif_etb: 40000000.00
  },
  {
    hscode_id: 2,
    year: 2015,
    code: 10011000,
    description: "Pumpkin Pies of width > 10m.",
    country_origin: "United States",
    country_consignment: "Canada",
    net_mass: 1500.00,
    cif_usd: 9000000.00,
    cif_etb: 180000000.00
  }
])

Export.create!([
  {
    hscode_id: 1,
    year: 2015,
    code: 20011000,
    description: "Printers",
    destination: "China",
    net_mass: 10000.00,
    fob_usd: 1000000.00,
    fob_etb: 20000000.00
  },
  {
    hscode_id: 2,
    year: 2016,
    code: 10011000,
    description: "Pumpkin Pies of width > 10m.",
    destination: "Germany",
    net_mass: 10000.00,
    fob_usd: 1000000.00,
    fob_etb: 20000000.00
  }
])