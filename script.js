//GameSateVariable that can be Exported or loaded in from a file,string,JSON file depending on how saving will be implemented
const Session = {
  Extractor: {
    Scuttler: {
      Count: 0,
      Output: 1
    },
    Roamer: {
      Count: 0,
      Output: 5
    },
    Strider: {
      Count: 0,
      Output: 10
    }
  },
  Materials: {
    Grist: {
      //Blocks
      Blocks: {
        //--Basalt
        Basalt: {
          Count: 0,
          Cap: 10,
          Extractor: {
            Scuttler: {
              Cost: {
                BuildGrist: 10,
                Basalt: 10,
                Dowels: 1
              },
              Count: 0,
              Cap: 1,
              Output: 1
            },
            Roamer: {
              Count: 0,
              Output: 5
            },
            Strider: {
              Count: 0,
              Output: 10
            }
          }
        },
        //--Clay
        Clay: {
          Count: 0,
          Cap: 10,
        },
        //--Copper
        Copper: {
          Count: 0,
          Cap: 10,
        },
        //--Malachite
        Malachite: {
          Count: 0,
          Cap: 10,
        },
        //--Obsidian
        Obsidian: {
          Count: 0,
          Cap: 10,
        }
      },
      //Gems
      Gems: {
        //--Ametrine
        Ametrine: {
          Count: 0,
          Cap: 10,
        },
        //--Diamond
        Diamond: {
          Count: 0,
          Cap: 10,
        },
        //--Moonstone
        Moonstone: {
          Count: 0,
          Cap: 10,
        },
        //--Quartz
        Quartz: {
          Count: 0,
          Cap: 10,
        },
        //--Rosequartz
        Rosequartz: {
          Count: 0,
          Cap: 10,
        }
      },
      //Gushers
      Gushers: {
        //--Amethyst
        Amethyst: {
          Count: 0,
          Cap: 10,
        },
        //--Aventurine
        Aventurine: {
          Count: 0,
          Cap: 10,
        },
        //--BuildGrist
        BuildGrist: {
          Count: 0,
          Cap: 2 * Math.pow(10, 1),
          Extractor: {
            Scuttler: {
              Cost: {
                BuildGrist: 10,
                Dowels: 1
              },
              Count: 0,
              Cap: 1,
              Output: 1
            }
          }
        },
        //--Citrine
        Citrine: {
          Count: 0,
          Cap: 10,
        },
        //--Coal
        Coal: {
          Count: 0,
          Cap: 10,
        },
        //--Garnet
        Garnet: {
          Count: 0,
          Cap: 10,
        },
        //--Unknown
        Unknown: {
          Count: 0,
          Cap: 10,
        }
      },
      //Miscs
      Miscs: {
        //--Ash
        Ash: {
          Count: 0,
          Cap: 10,
        },
        //--Pearl
        Pearl: {
          Count: 0,
          Cap: 10,
        },
        //--Sugar
        Sugar: {
          Count: 0,
          Cap: 10,
        }
      },
      //Oils
      Oils: {
        //--Amber
        Amber: {
          Count: 0,
          Cap: 10,
        },
        //--Blood
        Blood: {
          Count: 0,
          Cap: 10,
        },
        //--Ink
        Ink: {
          Count: 0,
          Cap: 10,
        },
        //--Poison
        Poison: {
          Count: 0,
          Cap: 10,
        },
        //--Tea
        Tea: {
          Count: 0,
          Cap: 10,
        }
      }
    },
    Dowels: {
      Count: 0,
      Cap: 5,
      cost: 20
    }
  },
  PorkHollow: {
    Savings: 0,
    B: 0,
    Bo: 0,
    Boo: 0,
    Boon: 0,
    BooonDollar: 0,
    BoonBuck: 0,
    BoonCase: 0,
    BoonMonds: 0,
    BoonMank: 0,
    BoonMint: 0
  },
  GlobalProuctionCount: {
    Dowel: 0,
    BuildGrist: 0,
    Amethyst: 0,
    Aventurine: 0,
    Citrine: 0,
    Coal: 0,
    Garnet: 0,
    Amber: 0
  },
  ExtractorGate: {
    BuilgGrist: false,
    Amber: false
  },
  Unlcoks: {
    Dowels: false,
    Amber: false
  },
}

BoonWorth = {
  B: 0,
  Bo: 0,
  Boo: 0,
  Boon: 0,
  BooonDollar: 0,
  BoonBuck: 0,
  BoonCase: 0,
  BoonMonds: 0,
  BoonMank: 0,
  BoonMint: 0
}

Scuttler = {
  Count: 1,
  Cost: {
    Dowel: 1,
    BuildGrist: 10
  }
}

function AddDowel() {
  if (Session.Materials.Grist.Gushers.BuildGrist.Count >= 10 && Session.Materials.Dowels.Count < Session.Materials.Dowels.Cap) {
    Session.Materials.Dowels.Count++;
    Session.Materials.Grist.Gushers.BuildGrist.Count = Session.Materials.Grist.Gushers.BuildGrist.Count - 10
    UpdateStorage(true, 'BuildGrist', null, null, 10);
    UpdateStats();
  } else {

  }
}
function AddBlock(type, extractor) {
  switch (type) {
    case 'Basalt':
      AddBasalt();
      UpdateStorage();
      UpdateStats();
      break;
  }
  function AddBasalt() {
    scount = Session.Materials.Grist.Blocks.Basalt.Count;
    scap = Session.Materials.Grist.Blocks.Basalt.Cap
    if (Session.Materials.Grist.Blocks.Basalt.Count < Session.Materials.Grist.Blocks.Basalt.Cap) {
      if (!extractor) {
        Session.Materials.Grist.Blocks.Basalt.Count++;
        scount = Session.Materials.Grist.Blocks.Basalt.Count;
        console.log("Count was Null, add 1 Basalt. = ") + Session.Materials.Grist.Blocks.Basalt.Count;
      } else {
        Session.Materials.Grist.Blocks.Basalt.Count = Session.Materials.Grist.Blocks.Basalt.Count + (Session.Materials.Grist.Blocks.Basalt.Extractor.Scuttler.Count * Session.Materials.Grist.Blocks.Basalt.Extractor.Scuttler.Output);
        UpdateStats();
      }
    }
  }
  function UpdateStorage() {
    switch (type) {
      case 'Basalt':
        scount = Session.Materials.Grist.Blocks.Basalt.Count;
        scap = Session.Materials.Grist.Blocks.Basalt.Cap;
        break;
    }
    var elem = document.getElementById(type + "StorageBar");
    elem.style.width = (scount / scap) * 100;
    var width;
    width = (scount / scap) * 100;
    elem.style.width = width + '%';
  }
}

function AddScuttler(type) {
  switch (type) {
    case 'Basalt':
      var scost1 = Session.Materials.Grist.Blocks.Basalt.Extractor.Scuttler.Cost.BuildGrist;
      var scost2 = Session.Materials.Grist.Blocks.Basalt.Extractor.Scuttler.Cost.Basalt;
      var scost3 = Session.Materials.Grist.Blocks.Basalt.Extractor.Scuttler.Cost.Dowels;

      //if (Session.Materials.Grist.Blocks.Basalt.Extractor.Scuttler.Count < Session.Materials.Grist.Blocks.Basalt.Extractor.Scuttler.Cap) {
        if (Session.Materials.Grist.Gushers.BuildGrist.Count >= scost1 && Session.Materials.Grist.Blocks.Basalt.Count >= scost2 && Session.Materials.Dowels.Count >= scost3) {
          Session.Materials.Grist.Gushers.BuildGrist.Count = Session.Materials.Grist.Gushers.BuildGrist.Count - Session.Materials.Grist.Blocks.Basalt.Extractor.Scuttler.Cost.BuildGrist;
          Session.Materials.Grist.Blocks.Basalt.Count = Session.Materials.Grist.Blocks.Basalt.Count - Session.Materials.Grist.Blocks.Basalt.Extractor.Scuttler.Cost.Basalt;
          Session.Materials.Dowels.Count = Session.Materials.Dowels.Count - Session.Materials.Grist.Blocks.Basalt.Extractor.Scuttler.Cost.Dowels;
          Session.Materials.Grist.Blocks.Basalt.Extractor.Scuttler.Count++;
          UpdateStats();
        }
      //}
      break;
    case 'BuildGrist':
      var scost1 = Session.Materials.Grist.Gushers.BuildGrist.Extractor.Scuttler.Cost.BuildGrist;
      var scost2 = Session.Materials.Grist.Gushers.BuildGrist.Extractor.Scuttler.Cost.Dowels;

      //if (Session.Materials.Grist.Gushers.BuildGrist.Extractor.Scuttler.Count < Session.Materials.Grist.Gushers.BuildGrist.Extractor.Scuttler.Cap) {
        if (Session.Materials.Grist.Gushers.BuildGrist.Count >= scost1 && Session.Materials.Dowels.Count >= scost2) {
          Session.Materials.Grist.Gushers.BuildGrist.Count = Session.Materials.Grist.Gushers.BuildGrist.Count - Session.Materials.Grist.Gushers.BuildGrist.Extractor.Scuttler.Cost.BuildGrist;
          Session.Materials.Dowels.Count = Session.Materials.Dowels.Count - Session.Materials.Grist.Gushers.BuildGrist.Extractor.Scuttler.Cost.Dowels;
          Session.Materials.Grist.Gushers.BuildGrist.Extractor.Scuttler.Count++;
          UpdateStats();
        }
      //}
      break;
  }
}

function AddGusher(type, extractor) {
  switch (type) {
    case 'BuildGrist':
      AddBuildGrist();
      UpdateStats();
      break;
  }
  function AddBuildGrist() {
    scount = Session.Materials.Grist.Gushers.BuildGrist.Count;
    scap = Session.Materials.Grist.Gushers.BuildGrist.Cap
    //if (Session.Materials.Grist.Gushers.BuildGrist.Count < Session.Materials.Grist.Gushers.BuildGrist.Cap) {
      if (!extractor) {
        Session.Materials.Grist.Gushers.BuildGrist.Count++;
        scount = Session.Materials.Grist.Gushers.BuildGrist.Count;
        console.log("Count was Null, add 1 BuildGrist. = ") + Session.Materials.Grist.Gushers.BuildGrist.Count;
      } else {
        Session.Materials.Grist.Gushers.BuildGrist.Count = Session.Materials.Grist.Gushers.BuildGrist.Count + (Session.Materials.Grist.Gushers.BuildGrist.Extractor.Scuttler.Count * Session.Materials.Grist.Gushers.BuildGrist.Extractor.Scuttler.Output);
      }
    //}
  }
}

//UpdateEverythingFunction
function UpdateStats() {
  UpdateMaterials();
}
//Grist Update Functions
function UpdateMaterials() {
  UpdateBlocks();
  UpdateGushers();
  UpdateDowels();
  UpdateExtractors();
}
function UpdateStorage(reset, type, scount, scap, removedGrist) {
  var width;
  var elem = document.getElementById(type + "StorageBar");
  if (reset) {
    width = elem.style.width - removedGrist;
    elem.style.width = width + '%';
  } else {
    width = (scount / scap) * 100;
    elem.style.width = width + '%';
  }

}
function UpdateBlocks() {
  document.getElementById('BasaltCount').innerHTML = Session.Materials.Grist.Blocks.Basalt.Count;
  document.getElementById('BasaltCap').innerHTML = Session.Materials.Grist.Blocks.Basalt.Cap;
}
function UpdateDowels() {
  document.getElementById('DowelCount').innerHTML = Session.Materials.Dowels.Count;
  document.getElementById('DowelCap').innerHTML = Session.Materials.Dowels.Cap;
}
function UpdateGushers() {
  document.getElementById('BuildGristCount').innerHTML = Session.Materials.Grist.Gushers.BuildGrist.Count;
  document.getElementById('BuildGristCap').innerHTML = Session.Materials.Grist.Gushers.BuildGrist.Cap;
}

function UpdateExtractors() {
  document.getElementById('BasaltScuttlerCount').innerHTML = Session.Materials.Grist.Blocks.Basalt.Extractor.Scuttler.Count;
  document.getElementById('BasaltScuttlerCap').innerHTML = Session.Materials.Grist.Blocks.Basalt.Extractor.Scuttler.Cap;
  document.getElementById('BuildGristScuttlerCount').innerHTML = Session.Materials.Grist.Gushers.BuildGrist.Extractor.Scuttler.Count;
  document.getElementById('BuildGristScuttlerCap').innerHTML = Session.Materials.Grist.Gushers.BuildGrist.Extractor.Scuttler.Cap;
}

var BasaltInterval = setInterval(function () {
  AddBlock('Basalt', true)
  AddGusher('BuildGrist', true)
  UpdateBlocks();
}, 1000);


function tut() {

}

window.setInterval(function () {
  //console.log("An Interval has ticked!");
  UpdateStats();
}, 1000);