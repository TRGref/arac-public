'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d38dacd31fa75e227659d7c4b69aad44",
".git/config": "77cfcf4de506d7236ebd30f04e0959fd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "685390d8a96dd3b19e1098b0dd5a9320",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4eaf124615605bfead72369f640e8cce",
".git/logs/refs/heads/gh-pages": "4eaf124615605bfead72369f640e8cce",
".git/logs/refs/remotes/origin/gh-pages": "f554c2c4c0bf67dce17da06745e99cff",
".git/objects/07/84711e6f1c181a7a82704399588b66ec2400c3": "4384baec47bb096a1afe65fc338ec6ce",
".git/objects/09/5ce0b24cf23f47343e4a81203302b9f29100c5": "858d4d6724d025ab8c3e038199f3f320",
".git/objects/16/5623b1d271d1c1c01bd1ee4c0f53a808e8a05f": "e08edc81aef1adf0d2f8ce1fd64e245c",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/25/af9b91f1b060da36108c0751702cd839f3e6a1": "07890e78ca279b9240ce7410266f8a56",
".git/objects/26/d7233464ced19c78b9083d6e646061558f20e3": "b2a849fad8e21870c49984ef4c4aa14c",
".git/objects/2b/2dee624860b44eddf155f94e6086c6bf437154": "c6007e3941aa893da05c2ef9bea93f79",
".git/objects/30/65f143e5a02b66983a7d0fc0e5a895d74be4d7": "1ceffd5abeed4dd63fa1acedce4c24f2",
".git/objects/31/26fd6727ad348d80583eacac620e37f42ba335": "c01f2608988e7437f49e9261b4aa7c2f",
".git/objects/31/3df0c7c9fe98f8faccd7f9db33c70252e6303d": "0a11291acc804cb4594060ab2cb954be",
".git/objects/38/0208799fb7c265d000e6477d177df890481f02": "b9fd69b4455239aa7e41e542436999f2",
".git/objects/3b/8d597625ff9885258c0b02939bdbddc69cb322": "5a1b104aabe8faf4ce34f5364386c101",
".git/objects/3d/4c6f6b9b28cade64d48b9d7f67b0e0140433b6": "52a9c64c7bfeed6210e061213e43644b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/98a12aeb4426e5b4deb6b88f8703883600d694": "a112f89de248256b784b5075af7e78a9",
".git/objects/48/169dfadcb9cfe610cbc329e126218c36d0be7b": "2e26213fc00382940551891e237335f2",
".git/objects/4a/f8947633203cc93e73be34831274028aa1a39f": "2af620bc265e241eed2cacf83d59a9e4",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/50/2a28ed341b33a5805a4a625e45556d298d4c39": "85a64e84077b31498f3a42e50baed02d",
".git/objects/50/dabc3b0ad6bbd40dfe16a9d1d42306e94bc99f": "e6018800d34181b8d2227d8ee1c82603",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/53/c2bd015d3aa4577249a34cb35cc2f52b1dc76f": "2b55a3f41390c146d34f4f1037747ba2",
".git/objects/5b/870dcb0180cae5a4f6b7af3532b894f1eeedb1": "353d35a6b5408c549715dc38f289699d",
".git/objects/5e/a8c33061aee7201f71a57468d2cb69f637159c": "4bdac513f15b7216a2731ec4ec74f0cd",
".git/objects/61/0518970078736134a37fb1fa0823dd2cb4a2ee": "0dc0782e59d8099c47854fc014685905",
".git/objects/61/d15254cab8baf15b7756918075782099641f0f": "fbc317d75dd6ac65a540a0f235bb8b60",
".git/objects/63/198aa42ad393f3e3ff5f0ae9907f4cc0b7bde9": "f28d357a3299a489aa2ea96a6e48ef23",
".git/objects/63/d6a17627240da4a9805c6973c2afb9948d3d63": "7acab219a1aa888f8e926066614c8535",
".git/objects/64/2f1f893a6b91172277ac4dbce1bb2d83742b41": "55a4ec5f7991aac724a14aa9285183b0",
".git/objects/68/582e075c881eac0c81ef5f0c29994ff22d8f52": "14845fdb8b46672b124659bf934639cf",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/31c365f3dec93ec67cb818de852ea98e25ca1f": "37b646d9314064b864f47ce391c95a6e",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c04629055772c744ddce41b2b8a72eb37b9110": "c3edccda091c4df964d9196421045625",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/75/22df36be89b61033a63e90460259e630657773": "57899f13ae1faa184adfd40edd763cd8",
".git/objects/7a/423583e7fc92ff71bffdb9c339879cf7adec8b": "9f58e8aa0f3f1503aae2fb986a17ce4b",
".git/objects/7d/6992118f8a5e6621a6032013c6e009537c77ef": "d8145412c0d9514e03829a40f705969b",
".git/objects/80/33b2abfabf8168070980d0aab1292fc80e13ef": "c990ab4e9cae9d128b2d2edc4c0d802d",
".git/objects/82/54842ff145d736104777d79d00d690b9174861": "d23fcdb22320198487c148ffa3417b72",
".git/objects/83/779120c72ab34ab9f755b8c6231d995d9897ad": "afa5279898b9b32057f62099c474f965",
".git/objects/84/7970b372e1eba71f2067920e9e3e9018ad3e1e": "3dfd6c63d14197226caddb2811b0499a",
".git/objects/86/4fc3322a1ee71054925feb9cc4f027d594f4ca": "735757846d17e77047e96b8f03561f7b",
".git/objects/86/88183b097d28e964a0b5119f2ace00432e96a8": "36e6d950eb51d298b3da1558065fc317",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/2ffb83ea0ab4563e9bce1d6f92e1d16fdbafd4": "fd94590883383ef3090089d69143f7ea",
".git/objects/89/4d901c5231b0ec50e346ada62cdb871c41db10": "93659dd320b5fc1906c9c5770c6258c0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/7e103d38ba9764938dfbfe305b45d627a1eaff": "214677c169eefc7bc5b40db8259d4340",
".git/objects/93/0ff187b12c3db88468b0dad08d112c8b0d2197": "f6a15606de035ee81dff224ccc86ab20",
".git/objects/93/13249df26ebe595fb83b72b72ae6feea6aba20": "b4d1732c93af5f4b669f17609355b826",
".git/objects/99/6b9767667a47257c71c2ea3c350d125008937d": "3e7bdb1d29d76d4443d590272368cee0",
".git/objects/9a/cbb7eb174b82c3cc23e3582d5e0dbc34d0ef1b": "33949d26664320e5556e2cfbedfcf683",
".git/objects/9b/9f60afd22ad94ab8ef6880d0aacaecffb599ff": "242cc2e6625a1e6a0b3858ba7d04dcb5",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/b714713bf25fcd700841ac34b6ea8682f7189d": "0452acc016990117024b44940a54d068",
".git/objects/9d/f0eb662e564e9bf3b11cddccf4aec3774f88f9": "5673db7d919c04ce59140cee627af41b",
".git/objects/a0/d50fe166d14c89aea6db56d35acfd20531c68d": "f4053e42105a1bd900c4ef3258361b0b",
".git/objects/a5/96287556855314758a86df75b9b0c8d8aaf34a": "3a9e397def4dd0d45f39aa008eef75b7",
".git/objects/aa/e7121d6c3fa86c5130baee50efba184896a904": "9b7267858f533333ee739100fe1e01d2",
".git/objects/ab/3b6b8b90c14ca832e9ecccf19fb85579b97d08": "4e6ff777ade5c94d6ed793054aafcb65",
".git/objects/ab/8dd88ec2be84d9d5562adfb26e9803bb308e05": "fbcd0ce4edce3476d98abfd29e004987",
".git/objects/ab/dd2f6ffde9c5f8fca68a215ee65d39674c17a1": "85ae9f32fa9ceec63d241aeff5d52a4c",
".git/objects/b2/c13f89c0703e1e45aca5929fb7f7774b979c8b": "6d5a20fbf272f4bf5919ceb1d6b8920a",
".git/objects/b3/e8dd79bd1a91779c26f8663b1ebfa316c52fe1": "a9f5bdb2b597a5e913c8954fbb9f143c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bd/acdd06035f46f8687d964e291ea82a165d4542": "131ab6dea4263811d6a7018628e259d9",
".git/objects/be/5be9f0a14f59e731ca1457666dc82c8f2e4c08": "b965e75f68f7284946e5d585a258a00e",
".git/objects/c4/730a1e6b0f3509ae1bacd77c7ba75ecc567586": "db2a8d542aa928456461fe30b3092738",
".git/objects/c4/ca039f9caf274494ee99f4b9a28224fa2ffc78": "dd7f290ddb179a5e4bbb2a2e3b244366",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/d245a14bdf43a329fa182a621e3fe87f19070b": "08386cfe9b8163d3d3760e1bbd4d7e6c",
".git/objects/c9/9912df7c81a3ede8d091f8f2ca4513698ab08f": "593128e604d2c00e8d9ce3a27f479148",
".git/objects/cf/21ccda00c4138677e2cd9cdfba63a4d6343c2f": "4532e5d925a9267b4effdb261e200bbe",
".git/objects/d1/976c71ba51aa6bffb5738bf493cce1ee5f39a8": "8e68be180092b23ec1c7c9e7cd116d7b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/f0d7b2526576948789b3d35d620396df1806fc": "dd3f5ae6101b7e0f1e6267a1048ba7b8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/b1eada76c5b593f98691f90352142e5c046832": "b317d4f40a54172adb138df406e58b01",
".git/objects/d8/b586260f2881fd70b49ec8d9ecd611da797941": "9ff0703d2c6611de2032fb68d6f8cd79",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/de/0c31249dadd225d1e27c3bc771951b55c9e809": "8b63cb58104b6ebbe52e0fb69ab9e830",
".git/objects/de/cb10fba7c85b0c8996403ccfbd8c60c0f46218": "ecdb4eaa6cb63dc3c694456506f1ac6b",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e2/134796618f878b070b406b87b9decccbd3fec7": "12632f07418692b40dc35c4fe149d823",
".git/objects/e3/aeb85fff9c10bf1aa5d893912453ab64379e1a": "b0af23b104cbf8f737eb4bb76e996d63",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/4bf7e299ed1b8a3fb139b095bb524a3a3f3bbb": "a316b71566c7e8b1dbc55baae8e0f12a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/7dcb10e75005593326dace14d569bddd0be26a": "71be404fded86467cf8f1987e455db53",
".git/objects/ef/fc41ceff568a73ed6040dba567f06340c2f77c": "4447cb5c96975104a4278d4c95295e86",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/464825ba1a10ac980efb440d77ef3bb666ce58": "24f8d3301c2aac21bc2fe78be18b295b",
".git/objects/f5/50c60b41a4a3583353ba9e3e81cef6b922b76e": "1cba21c16ed81ec18039e75bb49a516d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fc/288d0bf8651daac944baed5dc9d2e9ea3a860d": "0e4ede3cf2d61af3dd0ccedfdc469010",
".git/refs/heads/gh-pages": "0a540d525621588cb92c52e2efed90b5",
".git/refs/remotes/origin/gh-pages": "0a540d525621588cb92c52e2efed90b5",
"assets/AssetManifest.bin": "b1882c7f702161983333f856bc4b88d8",
"assets/AssetManifest.bin.json": "6a7048cc9c99c421680959dcedba2bcc",
"assets/AssetManifest.json": "e293cc3e8c2aa1855535ece31e2af50c",
"assets/assets/data/models.json": "6ce78986ff4d7e6f90d6df91009b7e02",
"assets/assets/logo/alfa-romeo.png": "618627b9236fb9c2ae1e31f7e9efd60b",
"assets/assets/logo/audi.png": "df48dc9101cb8c562235d3d0af2fbdc1",
"assets/assets/logo/bmw-m.png": "8178b0361c2c0d1e0da63b3a31124bb1",
"assets/assets/logo/bmw.png": "0f1991aa500e18db2d5717aa4c2ffb0f",
"assets/assets/logo/bugatti.png": "6df05a8186679ec821eb36a69c695720",
"assets/assets/logo/byd.png": "2f33cb00dee8fc56d5ec5684b957c4f2",
"assets/assets/logo/chery.png": "65906158bb3ca4bb00da5c7e45088e6a",
"assets/assets/logo/chevrolet.png": "ff96c0093c6a11c4a38e48950586eefd",
"assets/assets/logo/citroen.png": "12dd027e9494e5f217087be44ed180e4",
"assets/assets/logo/cupra.png": "8ecad79b0bd41df97abf06cd1962e451",
"assets/assets/logo/dacia.png": "08e4f5bb7a5877b2605366a740abc24d",
"assets/assets/logo/daf.png": "ac8306ce8d1213de12e6b3f3c7ffdadd",
"assets/assets/logo/daihatsu.png": "f8938b2fe80e78797f64c048a1e38779",
"assets/assets/logo/ferrari.png": "c34be558169fd06e023cf3e8438602f5",
"assets/assets/logo/fiat.png": "c3acb1b52bb605e9d2d6d364a5c71bf1",
"assets/assets/logo/ford.png": "4c54ee7715704f43785f08460bf4e029",
"assets/assets/logo/gmc.png": "ed7d5731c5f4da9df8631f35f7ad75e6",
"assets/assets/logo/honda.png": "2ccdef585d77671be3d941b8d9ff9701",
"assets/assets/logo/hyundai.png": "665f368736ca29b1238e1bf61a60467d",
"assets/assets/logo/infiniti.png": "9102fd85e1438941fb1892d60f8d0bd4",
"assets/assets/logo/isuzu.png": "e983f67f3f35318b31d42a71aa18ac54",
"assets/assets/logo/iveco.png": "640f83920f3e0c299b921ac8a3195660",
"assets/assets/logo/jaguar.png": "81d2a15787e92edfeb179fdaad25efd9",
"assets/assets/logo/jeep.png": "c5afe6ce6ef4e74976c4e9220d25bb48",
"assets/assets/logo/kia.png": "ea1a0b9d6e633bec94303a4e04dd2b0d",
"assets/assets/logo/lamborghini.png": "63429981d07fcb66d377d0c7d8ec3f97",
"assets/assets/logo/land-rover.png": "c5ed32041fdba408b5e1cbcaf216b20a",
"assets/assets/logo/man.png": "46b5e0c98da1e72493acc691b4a5552f",
"assets/assets/logo/maserati.png": "b1991a137bddabbbfbb84b5f9ef1e94d",
"assets/assets/logo/mazda.png": "efcd0d1855baea51a4d7eeeb2814c49a",
"assets/assets/logo/mclaren.png": "094bc6bc3bb26567e8a35db6cbaf4317",
"assets/assets/logo/mercedes-amg.png": "f619f844a811a9d602cf2632521d833f",
"assets/assets/logo/mercedes-benz.png": "5ac36adcbdbf8a5334c1310ef104e06c",
"assets/assets/logo/mg.png": "3dc164a96957a5ef32cdff56f9bec537",
"assets/assets/logo/mini.png": "1eba5c9c287c96dd1926b4cb8f40e47e",
"assets/assets/logo/mitsubishi.png": "8ab7decfee6710c2d7bc6b5a58a1a5d7",
"assets/assets/logo/nissan-gt-r.png": "cc573120f0eca4e75504b10587f00445",
"assets/assets/logo/nissan.png": "a1ddd82a6596bf38ba041be2d3d2cd78",
"assets/assets/logo/opel.png": "658fb72d028f8eda589ee5af7c534464",
"assets/assets/logo/peugeot.png": "24da6a8eeac204f2935204d31c148f96",
"assets/assets/logo/porsche.png": "91dd72242be667451157320757ef1dd8",
"assets/assets/logo/renault.png": "8be4184d4177d872e0684b48040b9a74",
"assets/assets/logo/rolls-royce.png": "1b23f67cdf617bf23df2e298264b14fd",
"assets/assets/logo/scania.png": "a44d3d2676387fcf5355e018c51d2a3e",
"assets/assets/logo/seat.png": "2c9b19785b64606f2d4a7693c3d69106",
"assets/assets/logo/skoda.png": "d2f74e7f8be94d8bbe52ee3f40e623a3",
"assets/assets/logo/ssangyong.png": "a023678e300c07ad78c0106731b54de5",
"assets/assets/logo/subaru.png": "57d92cfb10670c80144c1dec12513bbe",
"assets/assets/logo/suzuki.png": "89cbafb880ed5a10a725280e1e62f553",
"assets/assets/logo/tata.png": "578ebe9d2ed52208e632d0fc21ee7f82",
"assets/assets/logo/tesla.png": "3c696ae20f52f6e0cfe0a8a28d695ef0",
"assets/assets/logo/togg.png": "d52205f62e75f1e9bc2c8a339a221f2c",
"assets/assets/logo/toyota.png": "d76f0677c607536b386f4ba9326b2369",
"assets/assets/logo/volkswagen.png": "b6a48e6bd96b9d56a72b9f2397ebbf54",
"assets/assets/logo/volvo.png": "35e4be00644bf81c059e6eae940ec8b0",
"assets/assets/logo/Yeni%2520Metin%2520Belgesi.txt": "46dc447d3f1670d4cc5bb065aa618216",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "81882e5463dbb2c4a9ed6268c2810968",
"assets/NOTICES": "183a4455b58d13063fdd68979237c108",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "f901f5d1c49949d455630374fda6dc65",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "516b6b7c0224f045ab19ae699db155a4",
"/": "516b6b7c0224f045ab19ae699db155a4",
"main.dart.js": "df70b82df381d80971c6232b260e965e",
"manifest.json": "cfbea99b5b4a1d7e2b4e525210c8d6d8",
"version.json": "e5e6246d124ae963fdef9f88a3a7061c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
