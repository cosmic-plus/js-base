"use strict"
/**
 * Aliases handlers & most known Stellar addresses.
 *
 * @private
 * @exports aliases
 */
const aliases = exports

/**
 * Add new **aliases** or replace existing ones.
 *
 * @example
 * cosmicLib.config.addAliases({
 *   'GCKA6K5PCQ6PNF5RQBF7PQDJWRHO6UOGFMRLK3DYHDOI244V47XKQ4GP': 'smartlands.io',
 *   'GBVOL67TMUQBGL4TZYNMY3ZQ5WGQYFPFD5VJRWXR72VA33VFNL225PL5': 'stellarport.io'
 * })
 *
 * @param {Object} aliases An object such as `{ publicKey1: name1, ..., publicKeyN: nameN }`
 */
aliases.set = function (conf, aliases) {
  conf.aliases = Object.assign(conf.aliases, aliases)
}

/**
 * Remove **publicKeys** from aliases list.
 *
 * @example
 * cosmicLib.config.removeAliases([
 *  'GCKA6K5PCQ6PNF5RQBF7PQDJWRHO6UOGFMRLK3DYHDOI244V47XKQ4GP',
 *  'GBVOL67TMUQBGL4TZYNMY3ZQ5WGQYFPFD5VJRWXR72VA33VFNL225PL5',
 * ])
 *
 * @param {Array} publicKeys An array of public keys
 */
aliases.remove = function (conf, publicKeys) {
  publicKeys.forEach((entry) => delete conf.aliases[entry])
}

/**
 * Aliases handlers & most known Stellar addresses. Aliases takes the form:
 *
 * ```js
 * {
 *   'publicKey1': 'name1',
 *   'publicKey2': 'name2',
 *    ...
 *   'publicKeyN': 'nameN'
 * }
 * ```
 *
 * Aliases are only used as a displaying sugar and can't be used as a
 * replacement for federated address as it would lead to security issues.
 */
aliases.all = {
  GBEUYU6BMXN7UBHKNKXRB6RS44UJJSUTR5YYVNZQZ27BNUSRRT5OYMDE:
    "accountviewer.stellar.org.gl",
  GA7P75Y35JGOU7HXDS3NMILNHTBBGKHYMUIH4J7SRFU6Z4MFHSP5ERI4:
    "accountviewer.stellar.org.mu",
  GA5X5JLMZBG5IPNGW3LLSI5N3T6T3DFT772FGH6QCVSBJBJDIXOZ74LA: "altilly.com",
  GAF4V5RJCSEKLNVPXZHF2ARSRYETAI7R72CLFVDU4DQBRVDQTE35ISXE: "altilly.com",
  GCKIK5F6J4KMKF6MKB5EM67S5CK557EZQ3IAMZM5FFAYST63S3HWXVPE: "anchormxn.com",
  GASWJWFRYE55KC7MGANZMMRBK5NPXT3HMPDQ6SEXZN6ZPWYXVVYBFRTE: "anchorusd.com",
  GCQ53YTWBW2LQZ776D4WGZFOJ72AKIZYMMIXCDVLMC5ZAJ45S54QWGHQ: "anchorusd.com",
  GDUKMGUGDZQK6YHYA5Z6AY2G4XDSZPSZ3SW5UN3ARVMO6QSRDWP5YLEX: "anchorusd.com",
  GCYE7C77EB5AWAA25R5XMWNI2EDOKTTFTTPZKM2SR5DI4B4WFD52DARS: "anclap.com",
  GAEGOS7I6TYZSVHPSN76RSPIVL3SELATXZWLFO4DIAFYJF7MPAHFE7H4: "apay.io",
  GAUTUYY2THLF7SGITDFMXJVYH3LHDSMGEAKSBU267M2K7A3W543CKUEF: "apay.io",
  GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR: "apay.io",
  GC5LOR3BK6KIOK7GKAUD5EGHQCMFOGHJTC7I3ELB66PTDFXORC2VM5LP: "apay.io",
  GCQTGZQQ5G4PTM2GL7CDIFKUBIPEC52BROAQIAPW53XBRJVN6ZJVTG6V: "apay.io",
  GCYKQ2627BPKMSUZJK64GPYVKD4TRNACP45X6B754PR6TCYJXCHGUTWB:
    "apiscapitalfunds.com",
  GDZURZR6RZKIQVOWZFWPVAUBMLLBQGXP2K5E5G7PEOV75IYPDFA36WK4: "atlantisblue.org",
  GABQBEZCNQRUHURCG6E2UZC6QXXEPLALHBVA6J6IQNKNJL66VPY7FO7G: "auskunft.de",
  GBITI7JTLGGQ6J6F3LT4ZTBW6Q67KLZJG7KNR73QGW74YLWG3VA4CAZR: "bac.gold",
  GACVB2E6IEV2UT6IDVOO5B5CNN7WPKJFR36B7KD7ZNXDANPTSYNMZYQM: "binance.com",
  GAHK7EEG2WWHVKDNT4CEQFZGKF2LGDSW2IVM4S5DP42RBW3K6BTODB4A: "binance.com",
  GBUTD5DNV43JBJP7AA657H2CYPUCAAFBXCKX7QE4XXGYIYFZZX2EKKVF: "binance.com",
  GCO2IP3MJNUOKS4PUDI4C7LGGMQDJGXG3COYX3WSB4HHNAHKYV5YL3VC: "binance.com",
  GD5J6HLF5666X4AZLTFTXLY46J5SW7EXRKBLEYPJP33S33MXZGV6CWFN: "bitbondsto.com",
  GAWPTHY6233GRWZZ7JXDMVXDUDCVQVVQ2SXCSTG3R3CNP5LQPDAHNBKL: "bitfinex.com",
  GD4J347D3NT267QWCMJDZKJPEQFO2VENLZV6NUHFJQIDVMHGPWYRZ2BC: "bitgo.com",
  GC7YNBWTTLCMAODL2KRBGVN6PIHH25GVUYTSIOSC744TZOG53VFNQ247: "bithumb.pro",
  GDLE7PMXCPKNALUQP6VLZTDUD2O5SJJ4GKKYXUME6KWHCPEAVGIWY6G6: "bitmart.com",
  GABRNO3RCFT5VS3JZ5K6A5PBVI47BKKNO6SH3XFQQHIPCW5AWIU3F4SL: "bitpanda.com",
  GAJMSPEVWNZ52NHZWH6TV4FBN7BZRFMDBQ6LEXU3EW2KJKFACNJCQQOK: "bitpanda.com",
  GDUST544JNATIO2VI3L7LXHVJFZXNYRWIKNMGRV2RZFZOOBE635SEI4C: "bitrue.com",
  GB6YPGW5JFMMP2QB2USQ33EUWTXVL4ZT5ITUNCY3YKVWOJPP57CANOF3: "bittrex.com",
  GDZHCJ73D23MJ76OAR2NQQICB3D3ENUPFT6KVYON3KXY73U6SWN25SU5: "bittrex.com",
  GC2IIDXF2DSZCF4A5Y2QIMK6P3S5QOMLHBIKDPY3WQCP25P7QI7ATIC5: "bkex.com",
  GARAR5QR7WRL24MQMSO4INWV7C5SE4EE2YVXTLD6ORONYFHSUAGZYSLN: "blockchain.com",
  GB76DZDZQRUGK3KEINZM6YDZI5OPVAP6UTIZKZIFNTRMG5T7UC5IRVRE: "blockchain.com",
  GBF6SZEZ4AJY7BCBUV3ZYJ3Q27YMO4NJU6IZQP7ODY47MPVFWCO24SNW: "blockchain.com",
  GBXIR6NGU5ZTE6V4WQO3GRNGVDR65Y5BMRUT3KVLJINGQ4TUFV3E3SPA: "blockchain.com",
  GDEZDZYWGBCIXWEMEZBTUE4B5H6N4WBYKVY6GQBKCFIL5HOUUNUOI6S3: "celsius.network",
  GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN: "centre.io",
  GAFK7XFZHMLSNV7OJTBO7BAIZA66X6QIBV5RMZZYXK4Q7ZSO52J5C3WQ: "centre.io",
  GDIEKKIQWMIZ4LD3RP3ABPN7X5KEAEWYMR634BRHB7EULIMEVREWLF3G: "centre.io",
  GB3RMPTL47E4ULVANHBNCXSXM2ZA5JFY5ISDRERPCXNJUDEO73QFZUNK: "cex.io",
  GCMUIH5THNEHBN6D26HVBCDWGYSX3D42D2CCTERNJLMRFFR2YI7H3IXJ: "changehero.io",
  GBEW2BYUP2PCKWVOQWL2Z2DDU6CBBYLPHDK3RR2LS4PI2CZUU5HL3GTC: "changenow.io",
  GBOAYBE3NJKS4WPIVM2H5DVFIDYLAHHD2DAWYL5LLUVYF77M3JIVGCTR: "citron.cash",
  GCJGYOH2EYW6FFISLBA3L3R3PUYCQ6DQ47GXVAMG7JLLIKPAPV3RLBSV: "citron.cash",
  GAFWA2DAM34MK3UVD34ECEHO5QIO2ILHLFOPJC33INPGUPLBC2EVNCSM: "citystatesm.com",
  GD76TKZP7YI6VC4ICFHXRRXVE7J6VLSWHCM4H6DDDMYQ4R62RGZJTHEX: "citystatesm.com",
  GA2MSSZKJOU6RNL3EJKH3S5TB5CDYTFQFWRYFGUJVIN5I6AOIRTLUHTO: "clickpesa.com",
  GA3CINHTGMUMRVPJPVHYJWQJ2EF7EX2PCRAFN4H4ZPO77WB6RHXEHMJT: "coinbase.com",
  GA4IRJ52YGZQJDS7XJ375UGSI4FE4KQXHFYUUYNR5QXDVQNAXQTLRJAB: "coinbase.com",
  GAESWA2UEUPPRYQMQ2DY5RNFHMXDTLUN2I2CU4LEAFXHFLDNU7SXLDHQ: "coinbase.com",
  GALIZARG6U5CZKHJHVGL2WJBL4AU7MOIY3GCBQ44Z45IRPU4RSEGOV67: "coinbase.com",
  GARFP7JOFVM2HMO2NPWYRXCJQWAMN5TQZPBDNGQCWAMXUJWMLRBG32HX: "coinbase.com",
  GAU5RIRH2V4OQZMUWZ64WCZD4KHJ5RJ2NGTYGDVPUVKRRVXDSZU3IFTL: "coinbase.com",
  GAUKMQKGMYTYEUDQXBZAV4FDH7OCK6EXLR726YKWV3XQOXMNUVQKXXBK: "coinbase.com",
  GAW62PTNT5SRWAB5KYO6V4TWSWIIFCW3RA2LBSQIZY6SKZOVIQ52R32P: "coinbase.com",
  GAY4G3PY3TPOVOSHDD2PZ4PIKA533VBBKEEJ5ASTOMPZOHAVKEWZ3ADS: "coinbase.com",
  GB554CPXC2T37J2ABBF4GNZBAAOZFM5FOC6BHYHRKTQ5YBQ3K2YBM3AC: "coinbase.com",
  GB5FUSCVVV7ZLKJVL7FRCSBQHZXYLMSWWXXYC7NH35GV57S5XWKEVA4V: "coinbase.com",
  GBAOY3CUDXLVHVEZJOSSFNQWZZS7XBO3QL7FVRJS3CGBTIWMIMIT62YO: "coinbase.com",
  GBCEYVPTL6BFCEIAVTSWVLEKCLVKEPSBXXM6BMHCN5A6VFANO4KWCVZI: "coinbase.com",
  GBDUXW4E5WRM5EM6UXBLE7Y5XGSXJX472BSSBPKFPQ3PJCJHRIA6SH4C: "coinbase.com",
  GBETVVQEX35VB2VDM4MDUX6KQXX6H4IIWFJ36FC3W3K7462ZE3ODJ64B: "coinbase.com",
  GBG7H54CDJVO2S2ZEVIKLDDB3BFDGMQLPSGPAYD5YELR7QD7FP3JIDQI: "coinbase.com",
  GBL42UC3XH7SSYO5QAPMS5CLYL5IHLR3BTUZYZTBQCMSNIPZ2Y2VRKBP: "coinbase.com",
  GBP4RYNGHJXLLSMUA4ZXE7TZBN7ILFUTLTIKUJFJQGALD3764HJBB5AX: "coinbase.com",
  GBRDZWUG7JCBMVX3ZT7MOJVDGLCYKP7W264AZ3KLLCXICM4QHT6ZFNI4: "coinbase.com",
  GBRSO2HPPEHCZASU3W3ZDMS7ISWPWJZB7IJ4JPFLZMKN7VOTWUCT3SL6: "coinbase.com",
  GBW5AENWI5PFJRYEIAIRYDB62MVEHDYHEBXKFN3TI64RSL2L6GYOYFG4: "coinbase.com",
  GCHN2EA7WXDEPYZ6KFRO3OUZ6S7MX24IMHW4665MXPVNZVWDNCFIFEXP: "coinbase.com",
  GCI3IB57NAUYPU5SWEMDHT2PGTYOIY4RFLRR7HZNOVMUFOUZXZGJK5JV: "coinbase.com",
  GCIWLLSJ77KV7CWWZVXL3LW5YRTQJIWSWXCFQ6AKH72A5MLWE733WMDJ: "coinbase.com",
  GCNTEQIUTCVJ2F5H4UNUIXVLH2ERVNFZVDXENCSTMXSZLC3JX6LBE2Z7: "coinbase.com",
  GCPBVJ66Y3TVCXSV6QVUUFX2MUYVJQ4O7AD3XKN3ZMLFZEJ6PRT2PFWC: "coinbase.com",
  GCRJROYL4MFGCGFC3VB7NNQ7QQMOAXUWHCV7IJYTDZHQWII5GN7D4J6F: "coinbase.com",
  GCSGZSC64UVUILNEB52AVU6AOBJ5YPMH74YMJM7HWVG55BCTEJOPRUBO: "coinbase.com",
  GCTQR4WHN4VDLBZIN7NWAOEGLQZVU4EASCXZLKN7VKBYDXQY4IAP3XW5: "coinbase.com",
  GCVNHGRBEHF2RXZWTXVL4EQSJN6GYWIGODVCQXYKORBGFKI3JJMQ6IUM: "coinbase.com",
  GCZFPS3WA6CPBM6EWCYSFZK7T22AE2VB2LZC7J4JTMF6E6MKCGM6JSJM: "coinbase.com",
  GD6EEM6XL24SEIEP7ZNSTY6JS3NWHLTLK7VYF74OBTUUYGS3BV3YYG2S: "coinbase.com",
  GDGCDU5OLMJ3PT2HSDACJRHMLUWPTLUERWHX7TOR7DTO3IMI5GBZSMYL: "coinbase.com",
  GDLDGDZXFCXPXIEGFSNZZ52TLNKGCUM3TUHPPMYKVD6DASRH2JD3KNE3: "coinbase.com",
  GDLNUWHCGELKW6OA7KBLNRBHUR7QN76X3W3LNQ3QCTZ7PBGQCB34EYGD: "coinbase.com",
  GDQP2KPQGKIHYJGXNUIYOMHARUARCA7DJT5FO2FFOOKY3B2WSQHG4W37: "coinbase.com",
  GDRRTV6AQF7IFWTN3NBBAR2MTF52Y7V7REC4FYHLGBW6EXNH4LTHU5AT: "coinbase.com",
  GDTKY3UEUV57FCC56MUOWRVR2MUMVFX2Y2RBVTB7Y7CQMC4NREZDDOMZ: "coinbase.com",
  GDWKMHRC5ZIGMBJAULUFDK66YMC756LDM7UZSDNREIZKLJ4KIEEM5CK3: "coinbase.com",
  GDYAIQEA6VFM6LCCLJBGKIMVXL2YNLGGJJD4DN5DZ3VV6UOVX4X5LK4V: "coinbase.com",
  GDXK7IBK4S63WLVVCW66GFJSWS7YXIJTFTN4ZI2WQ4DLKSKB55GSCYKJ: "coinhako.com",
  GA2XP4KMY4KWNPW4KUCUKYUF2J7Y6HO5HLPUEA3VPVSMYCM3TGNEZP5S: "coinswitch.co",
  GAWODAROMJ33V5YDFY3NPYTHVYQG7MJXVJ2ND3AOGIHYRWINES6ACCPD: "cowrie.exchange",
  GDODU4ADATBOFTOK2BMAZI6UCW5EFU3IZTHLRNHYO7KX52XELROM3G4F: "cryptocapital.io",
  GB67TJFJO3GUA432EJ4JTODHFYSBTM44P4XQCDOFTXJNNPV2UKUJYVBF: "crypto.com",
  GDMXNQBJMS3FYI4PFSYCCB4XODQMNMTKPQ5HIKOUWBOWJ2P3CF6WASBE: "cryptomkt.com",
  GDX7YFSJODKHTQFYHOAY5LM4E4BJRONH5XTUXLXM75G3O4UVNVTYY57E: "daddycoin.net",
  GAZPKFKAB77OLKE7EGEQK6I4ZGBJXSYCWMG654KLOWRX3KEK7MLZPYED: "exmarkets.com",
  GC4XXGFHK4U56VJLF2TSLGUEER2BKH6PWE5BURYMAFYULVJB3WKOXFFM: "exmo.com",
  GDLJS5SWQQOCB2B2HFCZIMRSAHLPJS427AG2UBOSUMG6TOCBOE5ZTMA5: "exmo.com",
  GDYZCNPVAPCUFJPUCDLPK4TSOLCATLJ44XGYDXQYIORVSD2GEWMHMCHU: "exmo.com",
  GAQ6W5I7LIWQAE47ZY7EQWRVVF2JELYXG6OKL7HHOSL5MWVEIGRPGYCO: "factrpay.io",
  GCC4YLCR7DDWFCIPTROQM7EB2QMFD35XRWEQVIQYJQHVW6VE5MJZXIGW: "flutterwave.com",
  GAN5X2FUP2PCQITFAZE2CB5PBTGVZKVJLUDVTRRRV7PTZYQWYD4CRP65: "freewallet.org",
  GBUYUAI75XXWDZEKLY66CFYKQPET5JR4EENXZBUZ3YXZ7DS56Z4OKOFU: "funtracker.site",
  GBC6NRTTQLRCABQHIR5J4R4YDJWFWRAO4ZRQIM2SVI5GSIZ2HZ42RINW: "gate.io",
  GARFMAHQM4JDI55SK2FGEPLOZU7BTEODS3Y5QNT3VMQQIU3WV2HTBA46: "glitzkoin.com",
  GBE27W2DJZS4AFFR2HVZBK4KHD4TQQ4ITB2AQTYA5L57K6ZTRWPJUDH6: "goodx.network",
  GDYNTGXBDWARLJ34GRQ4ON4EGBXSTPR5LEDTD5LLOOHPS6EZU6QXIIYO: "goodx.network",
  GCXDR4QZ4OTVX6433DPTXELCSEWQ4E5BIPVRRJMUR6M3NT4JCVIDALZO: "gopax.com",
  GAJ7V3EMD3FRWAPBEJAP7EC4223XI5EACDZ46RFMY5DYOMCIMWEFR5II: "gratz.io",
  GA6KR5DMGJ6OPPG4OONB65JPU3TZE2CWCLKTBV4DHXFA2Z4XKWQSVCTC: "heir.io",
  GDX6FFZUVSYTOV23NP2PUUGQIORTWQHUXXPXYOUIOY6CDQXG4NP6OEQ7: "hitbtc.com",
  GC4KAS6W2YCGJGLP633A6F6AKTCV4WSLMTMIQRSEQE5QRRVKSX7THV6S: "indodax.com",
  GCNSGHUCG5VMGLT5RIYYZSO7VQULQKAJ62QA33DBC5PPBSO57LFWVV6P:
    "interstellar.exchange",
  GC4HS4CQCZULIOTGLLPGRAAMSBDLFRR6Y7HCUQG66LNQDISXKIXXADIM: "ixinium.io",
  GANZBUS4726LBT2CBJ3BGF3TP4NJT5MHZMI423NHMXFRWGO2DCBQEXYZ: "jetmint.org",
  GCQHDR2KSCVNULFX3C2NKFEXNJEUELJVMQAN3OCLAM5KXG4DWQSRMXYZ: "jetmint.org",
  GDV4KECLSZLKRVH4ZTWVAS4I3W2LPAPV66ADFFUZKGIVOTK6GMKGJT53: "keybase.io",
  GA5XIGA5C7QTPTWXQHY6MCJRMTRZDOSHR6EFIBNDQTCQHG262N4GGKTM: "kraken.com",
  GB5BK7HJK7SJGJXN4X6BV2QBEWGXVMEZJRGKWBFU6PK6BV4DW7WOQ27W: "kthouse.co",
  GB6JTIT5PHAZA4VMFI7TGGG44TE3LEDFPG52GSKBZOPDDDMNJAGSF46T: "kucoin.com",
  GBJNV2MQA7M5GNBRDFW46JLXIN7ZLYVVM4UW4CWDZO4KZKXIXCRYHMH2: "kucoin.com",
  GCTLB7LW7B5ON4QIBIDEWA7MC2KJL2NZEXK24RU32QNOB5IMMCGNLMBD: "kucoin.com",
  GBFZPAHO24P7ZVZCMI5SXZR53UYD325OWSSWWHHVLBNN56LU5YZJJFNP: "lightyear.io",
  GBIDASRVG3OLGNFEAUHQAZUJJI7SOCG5CJK676CUTWXHF3W2OIR6GSGJ: "lobstr.co",
  GD33QBHRPHI5APFSUVMHJN7SVZK5DCMS4EOXO3TC2NBZ3HA7JXCT75Z3: "luckyfish.io",
  GCCD6AJOYZCUAQLX32ZJF2MKFFAUJ53PVCFQI3RHWKL3V47QYE2BNAUT: "lumenaut.net",
  GBVB43NLVIP2USHXSKI7QQCZKZU2Z6U6A5PAHMIW7LLNVMQJTOX2BZI5: "luxpayband.io",
  GDTEQF6YGCKLIBD37RJZE5GTL3ZY6CBQIKH7COAW654SYEBE6XJJOLOW: "luxpayband.io",
  GD2YURFWC5LIRLM4CCVZZHCFV6WXO46VOSBBPTJG6MPQN6ANYZZOLQJL:
    "martialartscoin.io",
  GBWMQSLPYKUZW4ZTMQ5CJWBYQICBXUTYS4CNSZRVRQ7WN33H5CZPLAFW: "mobiepay.io",
  GA6HCMBLTZS5VYYBCATRBRZ3BZJMAFUDKYYF6AH6MVCMGWMRDNSWJPIH: "mobius.network",
  GAKBPBDMW6CTRDCXNAPSVJZ6QAN3OBNRG6CWI27FGDQT2ZJJEMDRXPKK: "moni.com",
  GBHA4FGPHX7KURMP7CZU7SQ2UOAGTAQ22SCHPK5P5XCQHZXCSVXQJFYB: "nafuloo.com",
  GCZM5WQCHW7Z4DDDG4LIEOSITECW7PCYAOT267GQOZ25LGVM7OYCZYWO: "nexo.io",
  GD3WCAP6TJNWTSYIZR2A34FDHU55QY3JFSZGJMWHBZLCZCM5EL3EFROZ: "nexo.io",
  GAPRC4SRTZSIUA34CWP7KB7FIMURX3ZT2CPNBGET5TJ4XZBONKHS6TPF: "nicehash.com",
  GB2Y3AWXVROM2BHFQKQPTWKIOI3TZEBBD3LTKTVQTKEPXGOBE742NODL: "nodle.io",
  GDVKY2GU2DRXWTBEYJJWSFXIGBZV6AZNBVVSUHEPZI54LIS6BA7DVVSP: "ntokens.com",
  GBGII2C7M4TOEC2MVAZYG3TRFM3ATCCEWANSN4Q3AHEX3NRKXJCVZDEV: "okex.com",
  GBGVRE5DH6HGNYNLWQITKRQYGR4PWQEH6MOE5ELPY3I4XJPTZ7CVT4YW: "papayabot.com",
  GBR3RS2Z277FER476OFHFXQJRKYSQX4Z7XNWO65AN3QPRUANUASANG3L: "papayabot.com",
  GBUMIO5G77562NFZZVMKMAUQL3CCZOGTGTUP6PVVUS2BM7U2WSPHOTON: "photon.center",
  GCF7F72LNF3ODSJIIWPJWEVWX33VT2SVZSUQ5NMDKDLK3N2NFCUAUHPT: "poloniex.com",
  GCGNWKCJ3KHRLPM3TM6N7D3W5YKDJFL6A2YCXFXNMRTZ4Q66MEMZ6FI2: "poloniex.com",
  GAZPKDTEZ5UM3BF4E7FL7EMXRMLH76F2TNVXRLOF6SCVXOFWSPCEWFI5: "pr.network",
  GCLDH6L6FBLTD3H3B23D6TIFVVTFBLZMNBC3ZOI6FGI5GPQROL4FOXIN: "ripplefox.com",
  GB2WB73G5IWRXEUTJANAIF52JFTDXOXORAP4S5HZRW23TZG2ONDVZMVA: "scopuly.com",
  GC6OYQJIZF3HFXCYPFCBXYXNGIBQ4TNSFUBUXQJOZWIP6F3YZK4QH3VQ: "scopuly.com",
  GC5AD5DUPU5HOHLVARBR7S7JE6EOXZQF5Z4OP3IZA4KMIIDULOEB6GRY: "simpleswap.io",
  GDFI6NFZR6QXPEX7RRVSIWBQHROGR4JYFT4ZJISKAFUPQQF33DRDR7C5: "simpleswap.io",
  GCKA6K5PCQ6PNF5RQBF7PQDJWRHO6UOGFMRLK3DYHDOI244V47XKQ4GP: "smartlands.io",
  GCSAZVWXZKWS4XS223M5F54H2B6XPIIXZZGP7KEAIU6YSL5HDRGCI3DG: "stablex.cloud",
  GBK4AYTOYIAYT4UJECSQGMACUWLKYOOM4VCAUUZ3Y3FG5XD2LYK3FGK2: "stably.io",
  GDDGK5C7UQWC7AEFZZVO7KXRXZVP2BBQJ2IQFAIROKME2O3XQR2CMVC7: "stably.io",
  GAGILVZ22TSUPTLZXQDQNF2M4R6YW7HEBIVJE5G7WBWGTSPGEGHORBIT: "stellar.expert",
  GDWGFCWXIFKOZ5NDTL33NHPWMZASO2GV3N7ALJDSFAIMLU4JNDIOHARP: "stellar.expert",
  GCVHEKSRASJBD6O2Z532LWH4N2ZLCBVDLLTLKSYCSMBLOYTNMEEGUARD: "stellarguard.me",
  GA2VRL65L3ZFEDDJ357RGI3MAOKPJZ2Z3IJTPSC24I4KDTNFSVEQURRA: "stellar.org",
  GA6D2S6XDBT7WZIZNDGUBLXUGDAGLZGZ2SYT2JLXD4BB2W76XS66FZ2S: "stellar.org",
  GAENIE5LBJIXLMJIAJ7225IUPA6CX7EGHUXRX5FLCZFFAQSG2ZUYSWFK: "stellar.org",
  GAMGGUQKKJ637ILVDOSCT5X7HYSZDUPGXSUW67B2UKMG2HEN5TPWN3LQ: "stellar.org",
  GANOI26P6VAUL4NFVA4FAIOIBOR46NORONBIWUPRIGAMP7T5W5MOY4O6: "stellar.org",
  GATL3ETTZ3XDGFXX2ELPIKCZL7S5D2HY3VK4T7LRPD6DW5JOLAEZSZBA: "stellar.org",
  GAX3BRBNB5WTJ2GNEFFH7A4CZKT2FORYABDDBZR5FIIT3P7FLS2EFOZZ: "stellar.org",
  GAYOCVRRNXGQWREOZBDP4UEW475NKZKLA4EIEIBKBSJN2PQQWUQ5KGUH: "stellar.org",
  GB6D7BSIOPC7FTRLVMVRFPBQRFXWWDU3XXFU5YFSOPN4PQALNMQC7ANB: "stellar.org",
  GB6NVEN5HSUBKMYCE5ZOWSK5K23TBWRUQLZY3KNMXUZ3AQ2ESC4MY4AQ: "stellar.org",
  GBA6XT7YBQOERXT656T74LYUVJ6MEIOC5EUETGAQNHQHEPUFPKCW5GYM: "stellar.org",
  GBEVKAYIPWC5AQT6D4N7FC3XGKRRBMPCAMTO3QZWMHHACLHTMAHAM2TP: "stellar.org",
  GBVVWWN4YP76FKGO7RB42FSZDYD2PBXY2PJY3F6JJWLYU74TKUG775UP: "stellar.org",
  GCEZYB47RSSSR6RMHQDTBWL4L6RY5CY2SPJU3QHP3YPB6ALPVRLPN7OQ: "stellar.org",
  GCKJZ2YVECFGLUDJ5T7NZMJPPWERBNYHCXT2MZPXKELFHUSYQR5TVHJQ: "stellar.org",
  GCO4EFT6KUOQKVZO2O4GR5CJKMARBORXRE7KAKH36ZFAX662ZHINQ6UA: "stellar.org",
  GCPWKVQNLDPD4RNP5CAXME4BEDTKSSYRR4MMEL4KG65NEGCOGNJW7QI2: "stellar.org",
  GCVJDBALC2RQFLD2HYGQGWNFZBCOD2CPOTN3LE7FWRZ44H2WRAVZLFCU: "stellar.org",
  GCVLWV5B3L3YE6DSCCMHLCK7QIB365NYOLQLW3ZKHI5XINNMRLJ6YHVX: "stellar.org",
  GCWL7ACP6P5LHJB7OOVRDYH2U4WVQI4RFHSAYQQAEIPZCLGHUV6FJF2E: "stellar.org",
  GD2D6JG6D3V52ZMPIYSVHYFKVNIMXGYVLYJQ3HYHG5YDPGJ3DCRGPLTP: "stellar.org",
  GDBODIQSZ4LAHYJAGVDATIEUNFPAADG2X4T33ZIX6UO3WNOPEGXV7VRX: "stellar.org",
  GDKIJJIKXLOM2NRMPNQZUUYK24ZPVFC6426GZAEP3KUK6KEJLACCWNMX: "stellar.org",
  GDTNE54IWDB3UQLMIUSBKIDTMUW7FNKBU4VB2GVW4OL65BZN7W5VRNVY: "stellar.org",
  GDUY7J7A33TQWOSOQGDO776GGLM3UQERL4J3SPT56F6YS4ID7MLDERI4: "stellar.org",
  GDWNY2POLGK65VVKIH5KQSH7VWLKRTQ5M6ADLJAYC2UEHEBEARCZJWWI: "stellar.org",
  GDWFLXHM44UDVDSN4K67PJSPJ4GENIN2IDP2RCEXM4NFMMNFXP7PS2TZ: "stellar.org.mu",
  GABOIEB6BNGZ3DKJCBS3H3VGLYZRWD2NCM77OCONSULE3RJ4MKGWF25H: "stellar.org.ro",
  GBVOL67TMUQBGL4TZYNMY3ZQ5WGQYFPFD5VJRWXR72VA33VFNL225PL5: "stellarport.io",
  GBIYDVSYY24O7PJS54CLIMWT2KIB5EF6LDVRESD647KX7B3PNIKUYT5V:
    "stellarscam.report",
  GDCHDRSDOBRMSUDKRE2C4U4KDLNEATJPIHHR2ORFL5BSD56G4DQXL4VW: "stellarterm.com",
  GAFXX2VJE2EGLLY3EFA2BQXJADAZTNR7NC7IJ6LFYPSCLE7AI3AK3B3M: "stemchain.io",
  GBSTRUSD7IRX73RQZBL3RQUH6KS3O4NYFY3QCALDLZD77XMZOPWAVTUK: "stronghold.co",
  GCZYLNGU4CA5NAWBAVTHMZH4JXWKP2OUJ6OK3I7XXZCNA5622WUJVLTG: "sureremit.co",
  GDEGOXPCHXWFYY234D2YZSPEJ24BX42ESJNVHY5H7TWWQSYRN5ZKZE3N: "sureremit.co",
  GB3OE4IBQTYQFZZS5RXQHE4IPQL7ONOFOSAIS2NFRNMJKZEAI3AAUT2A: "swisscustody.org",
  GAP5LETOV6YIE62YAM56STDANPRDO7ZFDBGSNHJQIYGGKSMOZAHOOS2S: "tempocrypto.com",
  GDGQDVO6XPFSY4NMX75A7AOVYCF5JYGW2SHCJJNWCQWIDGOZB53DGP6C: "ternio.io",
  GDNQAK7B3WQKMEGKJK6FCDKIMKHOGYR7E637GCLFHWJOPCYE6VBALYDF: "thewwallet.com",
  GDSVWEA7XV6M5XNLODVTPCGMAJTNBLZBXOFNQD3BNPNYALEYBNT6CE2V: "thewwallet.com",
  GAKRDXBHA2TTOYJZQIAQ7ZDS555P24RAYRUUZWU3KHSLIOZMVV4IITXT: "traxalt.com",
  GDYG7OEXT7GO2WOYJKRFMYK6PXQTPFRKO4JSNRRZWE4JM2V6QWQR2QZD: "uhuruwallet.co.za",
  GARDNV3Q7YGT4AKSDF25LT32YSCCW4EV22Y2TV3I2PU2MMXJTEDL5T55: "ultrastellar.com",
  GAW4E6NGM4NPNX2LO2BKDPCCTUX3FJLKWHPU4VQPGBIBQGD6JTVF5C7C: "upbit.com",
  GA6SXIZIKLJHCZI2KEOBEUUOFMM4JUPPM2UTWX6STAWT25JWIEUFIMFF: "wazirx.com",
  GAFXNMKY74VQ2OY3VXWFCV7YLNKVEWRWWTPBVRPN6AMZQCTGK3754TZV: "wazirx.com",
  GAESQGK5TTKPT2JY4STRN6MJU56LNHQVBFROGX5GFIWUPK3JHZ5F5FCI: "wirexapp.com",
  GAR6LML2TJ43TRHGG4CZZTASXZ4PWECJQUHNMS3OYX6SCKJ2T6F6WR5Q: "wirexapp.com",
  GASBLVHS5FOABSDNW5SPPH3QRJYXY5JHA2AOA2QHH2FJLZBRXSG4SWXT: "wirexapp.com",
  GAX5KN5SZKIJFSJJ6X2ARE3PUBX63LBGU5FG7SYS4FDM3YALCZUAEBUH: "wirexapp.com",
  GB3DWRWMLXN3DZBGN573LIQ2F4QZGO4FQISROLKRLGPN7M72W7RNQY7R: "wirexapp.com",
  GB3TUMH5JJFDLYE72XDP3F33YKHEDWSRINKOMW6MC5GNF7OTETEHGXD4: "wirexapp.com",
  GB6C6WDH7RX6Z37SI7HXSYUITBPAK2BU5YOBM6ITYNHNMU7HA7HULDDB: "wirexapp.com",
  GB6UZI3NWBU66O3VPOEVKPIUA7LL23A42KBOXSUIM75T6RJDBMWZXT34: "wirexapp.com",
  GBCAZ6C5UP5G5DVIMYJCFL3OCSM5KJPN6GQJCB45EBWCNPMQX2CZL5YC: "wirexapp.com",
  GBI7IEDTM6EDNURWNLBCU27MVP45OVJE7LRD4PFS67NHTTRKDZQGFLKN: "wirexapp.com",
  GBOFQCVZF2DSFLJPJMKH7CIECCN7TYVAT2CSD73IVEBJJQU2VW6JNFHT: "wirexapp.com",
  GBPJ35BBTUOXNSGUTB6TQQZWUA7EFZS55KY7Y5Z75TVTN7SPNJKXMPYI: "wirexapp.com",
  GC5ISVO2RW6WOOVCBXDJRTFHI464VM3OAODA2EQIZDL7L2ZETXLRJHCI: "wirexapp.com",
  GCCMMUJ4DNVPDJ7ABDD7JA3KXDN2ISCFPSEXIXXGLXKT3HGXV6PPIQUG: "wirexapp.com",
  GCNSCEJ6OCO4A7CX5ZC7K3NYBLEQGPJ7RW4URIW5H7CPBQYS7RRWEDIF: "wirexapp.com",
  GCOSPF7NIQKRBE775J6JH7A4O5X7JWK3HPUEF2OBEKKTWI6OZ3OLG3HU: "wirexapp.com",
  GCPVAKXS3VTLE3HPF7B2Y54J3NOVUGTJYGENP3ZNM2MIVKHLZGK22IVQ: "wirexapp.com",
  GCQ7MZF5J34XWIH763CF5L52U5BN65ZTN66RFQ3UB5PW6UCQAQNB3LIV: "wirexapp.com",
  GCSNY4VMRQY7ZLOJZYS7RDNKBZSSSDANNCWKOOB2AW4NAVXLFW66I2HQ: "wirexapp.com",
  GCY2JTEDDLLJF5XMTZURXILXTLR275RZBWUZ3RCMV6ZRBPIPXJE4D4HZ: "wirexapp.com",
  GCZTW7ZWTX7EHRS23NF2IWZOUTJXLXC3Z3TEXV2BV4JWORXYSTZ6JVIT: "wirexapp.com",
  GDC7UWGW676LQFJLEVWVOYOKFGVTPDQ4LVP27QS3W45XDDT4UQHWHHO4: "wirexapp.com",
  GDESC7QUBSZURZYW3URLNRCRSTUMZNAMAJ35BH4VTVPD46FQ63BURPO5: "wirexapp.com",
  GDFZRPLTLY4HZXHRMN3J2LSSBNE3SRTLFWC6AKV3TS5TXBGYPJVZY44P: "wirexapp.com",
  GDITHXDSD5XKIUBR4T3BHHZ43PEUDYGMKHJY7O4Y7T3Q3QSATZ7O2HMH: "wirexapp.com",
  GDKY2CIGJMAGA2ZDTGSMF6LROXLRWP4E5BQU7ECEVAWGGRGIBQ7HKNWZ: "wirexapp.com",
  GDMEBQP7NSJBDFGRC4I6HRJODHLLJ6AWZ34YAMY5VIP2BM2QV6OIQZG3: "wirexapp.com",
  GDMSXC2ERUAKCPSYUZSMAPXDV44MZR3JVUBJZW63I6RKE6OX4OOONWBN: "wirexapp.com",
  GDOXP56C4SBKZM7NIURUANA63NXTRMJUEOWVR6Q5KJSBGIO7UAWEBSEP: "wirexapp.com",
  GA3FUYFOPWZ25YXTCA73RK2UGONHCO27OHQRSGV3VCE67UEPEFEDCOPA: "xlmpool.com",
  GDDLBDK6MPELQT5O6QC7BT56SM3WQKY7PEJ7FI4LQECDEZFTUB2JSKVC: "zebpay.com"
}
