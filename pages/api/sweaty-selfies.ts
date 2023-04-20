import { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse) => {
    const images = ["r0-2022-11-15_174018-cam.lyon1995.jpg",
        "r0-2022-11-15_174131-rcandrews555.jpg",
        "r0-2022-11-15_183728-maxjhalden.jpg",
        "r0-2022-11-15_183825-maxjhalden.jpg",
        "r0-2022-11-15_210430-jdswalker.jpg",
        "r0-2022-11-17_172401-hardiesuedaoyu.jpg",
        "r0-2022-11-17_184738-jdswalker.jpg",
        "r0-2022-11-17_193719-tom.bissett.jpg",
        "r0-2022-11-18_200432-cam.lyon1995.jpg",
        "r0-2022-11-20_125543-clementlamm.jpg",
        "r0-2022-11-21_181148-maxjhalden.jpg",
        "r0-2022-11-22_200355-tom.bissett.jpg",
        "r0-2022-11-22_214205-eleyp01.jpg",
        "r0-2022-11-23_004230-jirehloojr.jpg",
        "r0-2022-11-23_203651-cam.lyon1995.jpg",
        "r0-2022-11-24_172839-cam.lyon1995.jpg",
        "r0-2022-11-24_181833-maxjhalden.jpg",
        "r0-2022-11-25_112218-clementlamm.jpg",
        "r0-2022-11-25_173309-cam.lyon1995.jpg",
        "r0-2022-11-25_180641-hardiesuedaoyu.jpg",
        "r0-2022-11-26_152058-jirehloojr.jpg",
        "r0-2022-11-26_154343-timocles.copland.jpg",
        "r0-2022-11-28_174337-maxjhalden.jpg",
        "r0-2022-11-28_190043-matt_daly.jpg",
        "r0-2022-11-28_190902-hardiesuedaoyu.jpg",
        "r0-2022-11-28_205548-tom.bissett.jpg",
        "r0-2022-11-29_182606-jirehloojr.jpg",
        "r0-2022-11-29_184949-cam.lyon1995.jpg",
        "r0-2022-11-29_194755-timocles.copland.jpg",
        "r0-2022-11-29_202248-rcandrews555.jpg",
        "r0-2022-11-30_141047-maxjhalden.jpg",
        "r0-2022-12-01_135633-timocles.copland.jpg",
        "r0-2022-12-01_135824-maxjhalden.jpg",
        "r0-2022-12-03_223719-matt_daly.jpg",
        "r0-2022-12-03_223723-matt_daly.jpg",
        "r0-2022-12-04_120538-tom.bissett.jpg",
        "r0-2022-12-05_180203-cam.lyon1995.jpg",
        "r0-2022-12-05_192557-matt_daly.jpg",
        "r0-2022-12-06_164452-ollyloughnan.jpg",
        "r0-2022-12-06_191728-timocles.copland.jpg",
        "r0-2022-12-06_192531-maxjhalden.jpg",
        "r0-2022-12-06_192615-maxjhalden.jpg",
        "r0-2022-12-08_192322-cam.lyon1995.jpg",
        "r0-2022-12-09_120452-hardiesuedaoyu.jpg",
        "r0-2022-12-10_095404-timocles.copland.jpg",
        "r0-2022-12-10_100604-maxjhalden.jpg",
        "r0-2022-12-10_171215-rcandrews555.jpg",
        "r0-2022-12-10_184053-eleyp01.jpg",
        "r0-2022-12-12_173016-maxjhalden.jpg",
        "r0-2022-12-12_182609-ultimate.jpg",
        "r0-2022-12-12_190320-matt_daly.jpg",
        "r0-2022-12-13_185553-maxjhalden.jpg",
        "r0-2022-12-13_193347-cam.lyon1995.jpg",
        "r0-2022-12-14_163112-hardiesuedaoyu.jpg",
        "r0-2022-12-14_212218-jirehloojr.jpg",
        "r0-2022-12-15_193025-cam.lyon1995.jpg",
        "r0-2022-12-17_141235-jirehloojr.jpg",
        "r0-2022-12-19_211930-timocles.copland.jpg",
        "r0-2022-12-20_134914-maxjhalden.jpg",
        "r0-2022-12-20_175403-ollyloughnan.jpg",
        "r0-2022-12-20_181430-hardiesuedaoyu.jpg",
        "r0-2022-12-21_131746-josh.howard.jpg",
        "r0-2022-12-21_183518-maxjhalden.jpg",
        "r0-2022-12-21_184153-tom.bissett.jpg",
        "r0-2022-12-21_191843-jirehloojr.jpg",
        "r0-2022-12-21_212416-timocles.copland.jpg",
        "r0-2022-12-22_173610-cam.lyon1995.jpg",
        "r0-2022-12-23_174954-matt_daly.jpg",
        "r0-2022-12-23_181042-hardiesuedaoyu.jpg",
        "r0-2022-12-23_191629-cam.lyon1995.jpg",
        "r0-2022-12-23_195847-tom.tulett.jpg",
        "r0-2022-12-24_101634-rcandrews555.jpg",
        "r0-2022-12-24_103111-maxjhalden.jpg",
        "r0-2022-12-24_174447-timocles.copland.jpg",
        "r0-2022-12-24_202444-eleyp01.jpg",
        "r0-2022-12-25_113829-tom.bissett.jpg",
        "r0-2022-12-25_114628-eleyp01.jpg",
        "r0-2022-12-25_122007-tom.tulett.jpg",
        "r0-2022-12-25_210111-ultimate.jpg",
        "r0-2022-12-26_110041-eleyp01.jpg",
        "r0-2022-12-26_110926-matt_daly.jpg",
        "r0-2022-12-26_115816-timocles.copland.jpg",
        "r0-2022-12-26_161209-hardiesuedaoyu.jpg",
        "r0-2022-12-26_181120-cam.lyon1995.jpg",
        "r0-2022-12-27_115043-maxjhalden.jpg",
        "r0-2022-12-27_122248-cam.lyon1995.jpg",
        "r0-2022-12-27_162225-eleyp01.jpg",
        "r0-2022-12-27_162228-eleyp01.jpg",
        "r0-2022-12-28_123319-eleyp01.jpg",
        "r0-2022-12-28_170929-hardiesuedaoyu.jpg",
        "r0-2022-12-29_094906-cam.lyon1995.jpg",
        "r0-2022-12-29_103843-matt_daly.jpg",
        "r0-2022-12-29_123801-maxjhalden.jpg",
        "r0-2022-12-29_123802-maxjhalden.jpg",
        "r0-2022-12-29_234703-jirehloojr.jpg",
        "r0-2022-12-30_081843-ollyloughnan.jpg",
        "r0-2022-12-30_122809-matt_daly.jpg",
        "r0-2022-12-30_184345-cam.lyon1995.jpg",
        "r0-2022-12-31_111406-eleyp01.jpg",
        "r0-2022-12-31_112110-eleyp01.jpg",
        "r0-2022-12-31_113758-eleyp01.jpg",
        "r0-2022-12-31_134554-cam.lyon1995.jpg",
        "r0-2023-01-02_160244-cam.lyon1995.jpg",
        "r0-2023-01-02_160933-jirehloojr.jpg",
        "r0-2023-01-02_163144-hardiesuedaoyu.jpg",
        "r0-2023-01-02_163728-eleyp01.jpg",
        "r0-2023-01-02_185033-matt_daly.jpg",
        "r0-2023-01-03_104627-cam.lyon1995.jpg",
        "r0-2023-01-03_132353-matt_daly.jpg",
        "r0-2023-01-03_172412-maxjhalden.jpg",
        "r0-2023-01-03_172414-maxjhalden.jpg",
        "r0-2023-01-03_194733-tom.bissett.jpg",
        "r0-2023-01-04_113153-rcandrews555.jpg",
        "r0-2023-01-04_115849-timocles.copland.jpg",
        "r0-2023-01-04_115859-timocles.copland.jpg",
        "r0-2023-01-04_130122-cam.lyon1995.jpg",
        "r0-2023-01-04_170155-maxjhalden.jpg",
        "r0-2023-01-04_200134-tom.bissett.jpg",
        "r0-2023-01-05_113511-matt_daly.jpg",
        "r0-2023-01-05_151658-jirehloojr.jpg",
        "r0-2023-01-06_005657-jirehloojr.jpg",
        "r0-2023-01-06_104750-timocles.copland.jpg",
        "r0-2023-01-06_172527-cam.lyon1995.jpg",
        "r0-2023-01-06_174452-maxjhalden.jpg",
        "r0-2023-01-06_180222-matt_daly.jpg",
        "r0-2023-01-07_094142-hardiesuedaoyu.jpg",
        "r0-2023-01-07_102955-hardiesuedaoyu.jpg",
        "r0-2023-01-07_193453-cam.lyon1995.jpg",
        "r0-2023-01-08_120340-tom.bissett.jpg",
        "r0-2023-01-08_170957-rcandrews555.jpg",
        "r0-2023-01-09_014150-jirehloojr.jpg",
        "r0-2023-01-09_160102-eleyp01.jpg",
        "r0-2023-01-09_160347-rcandrews555.jpg",
        "r0-2023-01-09_174835-hardiesuedaoyu.jpg",
        "r0-2023-01-09_175834-maxjhalden.jpg",
        "r0-2023-01-09_191135-matt_daly.jpg",
        "r0-2023-01-09_193820-maxjhalden.jpg",
        "r0-2023-01-09_194222-eleyp01.jpg",
        "r0-2023-01-10_174510-smcguckin07.jpg",
        "r0-2023-01-11_105138-hardiesuedaoyu.jpg",
        "r0-2023-01-12_173459-cam.lyon1995.jpg",
        "r0-2023-01-12_181504-eleyp01.jpg",
        "r0-2023-01-12_184919-eleyp01.jpg",
        "r0-2023-01-12_190531-maxjhalden.jpg",
        "r0-2023-01-13_191602-cam.lyon1995.jpg",
        "r0-2023-01-13_220330-hardiesuedaoyu.jpg",
        "r0-2023-01-14_095909-matt_daly.jpg",
        "r0-2023-01-15_184830-tom.bissett.jpg",
        "r0-2023-01-16_072616-tom.tulett.jpg",
        "r0-2023-01-16_170845-maxjhalden.jpg",
        "r0-2023-01-16_170916-tom.tulett.jpg",
        "r0-2023-01-16_185403-matt_daly.jpg",
        "r0-2023-01-16_200223-eleyp01.jpg",
        "r0-2023-01-17_110943-eleyp01.jpg",
        "r0-2023-01-17_142540-awicks10.jpg",
        "r0-2023-01-17_164950-rcandrews555.jpg",
        "r0-2023-01-17_181512-maxjhalden.jpg",
        "r0-2023-01-17_182251-tom.bissett.jpg",
        // "r0-2023-01-17_182409-rcandrews555.jpg",
        "r0-2023-01-17_182456-tom.tulett.jpg",
        // "r0-f2023-01-17_182626-maxjhalden.jpg",
        "r0-2023-01-17_232647-hardiesuedaoyu.jpg",
        "r0-2023-01-18_165625-cam.lyon1995.jpg",
        "r0-2023-01-19_122300-ollyloughnan.jpg",
        "r0-2023-01-19_143836-tom.tulett.jpg",
        "r0-2023-01-19_203740-prendie00.jpg",
        "r0-2023-01-20_110500-josh.howard.jpg",
        "r0-2023-01-21_111122-timocles.copland.jpg",
        "r0-2023-01-21_114800-eleyp01.jpg",
        "r0-2023-01-21_114802-eleyp01.jpg",
        "r0-2023-01-21_151520-maxjhalden.jpg",
        "r0-2023-01-21_155745-tom.bissett.jpg",
        "r0-2023-01-22_150552-matt_daly.jpg",
        "r0-2023-01-22_150553-matt_daly.jpg",
        "r0-2023-01-22_151013-cam.lyon1995.jpg",
        "r0-2023-01-23_173749-maxjhalden.jpg",
        "r0-2023-01-23_173925-maxjhalden.jpg",
        "r0-2023-01-23_174016-maxjhalden.jpg",
        "r0-2023-01-23_192646-jdswalker.jpg",
        "r0-2023-01-23_200241-eleyp01.jpg",
        "r0-2023-01-23_215124-matt_daly.jpg",
        "r0-2023-01-23_234815-hardiesuedaoyu.jpg",
        "r0-2023-01-24_082210-ollyloughnan.jpg",
        "r0-2023-01-24_122552-awicks10.jpg",
        "r0-2023-01-24_183338-cam.lyon1995.jpg",
        "r0-2023-01-24_183859-ollyloughnan.jpg",
        "r0-2023-01-24_185612-rcandrews555.jpg",
        "r0-2023-01-25_182634-tom.tulett.jpg",
        "r0-2023-01-26_095255-timocles.copland.jpg",
        "r0-2023-01-26_101809-ollyloughnan.jpg",
        "r0-2023-01-26_150900-eleyp01.jpg",
        "r0-2023-01-26_151021-awicks10.jpg",
        "r0-2023-01-26_154600-jdswalker.jpg",
        "r0-2023-01-26_154729-matt_daly.jpg",
        "r0-2023-01-26_195956-prendie00.jpg",
        "r0-2023-01-26_202356-hardiesuedaoyu.jpg",
        "r0-2023-01-27_193958-cam.lyon1995.jpg",
        "r0-2023-01-27_195000-timocles.copland.jpg",
        "r0-2023-01-27_203412-prendie00.jpg",
        "r0-2023-01-28_094050-matt_daly.jpg",
        "r0-2023-01-28_104542-tom.bissett.jpg",
        "r0-2023-01-28_190440-awicks10.jpg",
        "r0-2023-01-28_222231-prendie00.jpg",
        "r0-2023-01-29_100140-rcandrews555.jpg",
        "r0-2023-01-29_203625-prendie00.jpg",
        "r0-2023-01-29_230156-awicks10.jpg",
        "r0-2023-01-30_185128-matt_daly.jpg",
        "r0-2023-01-30_195642-eleyp01.jpg",
        "r0-2023-01-30_200512-rcandrews555.jpg",
        "r0-2023-01-30_211146-maxjhalden.jpg",
        "r0-2023-01-30_211148-maxjhalden.jpg",
        "r0-2023-01-30_211152-maxjhalden.jpg",
        "r0-2023-01-30_222951-hardiesuedaoyu.jpg",
        "r0-2023-01-30_234540-awicks10.jpg",
        "r0-2023-01-31_065617-eleyp01.jpg",
        "r0-2023-01-31_181528-ollyloughnan.jpg",
        "r0-2023-01-31_181633-jirehloojr.jpg",
        "r0-2023-01-31_193729-tom.bissett.jpg",
        "r0-2023-01-31_225316-awicks10.jpg",
        "r0-2023-02-01_065305-timocles.copland.jpg",
        "r0-2023-02-01_192615-jdswalker.jpg",
        "r0-2023-02-01_224805-prendie00.jpg",
        "r0-2023-02-02_173129-cam.lyon1995.jpg",
        "r0-2023-02-02_174114-ultimate.jpg",
        "r0-2023-02-02_182746-hardiesuedaoyu.jpg",
        "r0-2023-02-03_184509-cam.lyon1995.jpg",
        "r0-2023-02-05_072558-rcandrews555.jpg",
        "r0-2023-02-06_201056-tom.bissett.jpg",
        "r0-2023-02-06_202444-matt_daly.jpg",
        "r0-2023-02-06_202446-matt_daly.jpg",
        "r0-2023-02-07_184009-ollyloughnan.jpg",
        "r0-2023-02-07_185739-eleyp01.jpg",
        "r0-2023-02-07_185902-maxjhalden.jpg",
        "r0-2023-02-07_201014-jdswalker.jpg",
        "r0-2023-02-07_202106-jirehloojr.jpg",
        "r0-2023-02-08_072035-timocles.copland.jpg",
        "r0-2023-02-08_084356-hardiesuedaoyu.jpg",
        "r0-2023-02-08_100616-matt_daly.jpg",
        "r0-2023-02-09_133501-ollyloughnan.jpg",
        "r0-2023-02-09_191154-matt_daly.jpg",
        "r0-2023-02-10_191036-maxjhalden.jpg",
        "r0-2023-02-11_080726-eleyp01.jpg",
        "r0-2023-02-11_080730-eleyp01.jpg",
        "r0-2023-02-11_105448-hardiesuedaoyu.jpg",
        "r0-2023-02-11_105457-hardiesuedaoyu.jpg",
        "r0-2023-02-11_113246-ollyloughnan.jpg",
        "r0-2023-02-14_190644-hardiesuedaoyu.jpg",
        "r0-2023-02-14_190646-ollyloughnan.jpg",
        "r0-2023-02-14_211632-tom.bissett.jpg",
        "r0-2023-02-14_221410-hardiesuedaoyu.jpg",
        "r0-2023-02-14_221421-hardiesuedaoyu.jpg",
        "r0-2023-02-14_232846-awicks10.jpg",
        "r0-2023-02-15_174409-awicks10.jpg",
        "r0-2023-02-16_072850-timocles.copland.jpg",
        "r0-2023-02-16_163015-ultimate.jpg",
        "r0-2023-02-16_183209-ollyloughnan.jpg",
        "r0-2023-02-19_151037-matt_daly.jpg",
        "r0-2023-02-20_161759-ollyloughnan.jpg",
        "r0-2023-02-20_173350-maxjhalden.jpg",
        "r0-2023-02-21_154958-ollyloughnan.jpg",
        "r0-2023-02-21_164849-awicks10.jpg",
        "r0-2023-02-21_193744-jirehloojr.jpg",
        "r0-2023-02-21_194552-timocles.copland.jpg",
        "r0-2023-02-21_195924-tom.tulett.jpg",
        "r0-2023-02-21_224510-hardiesuedaoyu.jpg",
        "r0-2023-02-22_164727-cam.lyon1995.jpg",
        "r0-2023-02-23_095342-hardiesuedaoyu.jpg",
        "r0-2023-02-23_154108-awicks10.jpg",
        "r0-2023-02-23_190724-timocles.copland.jpg",
        "r0-2023-02-24_090730-matt_daly.jpg",
        "r0-2023-02-24_173546-maxjhalden.jpg",
        "r0-2023-02-25_084636-ollyloughnan.jpg",
        "r0-2023-02-26_225856-awicks10.jpg",
        "r0-2023-02-27_095014-hardiesuedaoyu.jpg",
        "r0-2023-02-27_122743-josh.howard.jpg",
        "r0-2023-02-27_163531-maxjhalden.jpg",
        "r0-2023-02-27_205328-matt_daly.jpg",
        "r0-2023-02-27_221743-tom.bissett.jpg",
        "r0-2023-02-28_184418-jirehloojr.jpg",
        "r0-2023-03-02_093649-ollyloughnan.jpg",
        "r0-2023-03-04_100903-timocles.copland.jpg",
        "r0-2023-03-04_222857-tom.bissett.jpg",
        "r0-2023-03-06_174404-maxjhalden.jpg",
        "r0-2023-03-06_175540-hardiesuedaoyu.jpg",
        "r0-2023-03-06_185205-matt_daly.jpg",
        "r0-2023-03-06_194302-eleyp01.jpg",
        "r0-2023-03-06_221505-awicks10.jpg",
        "r0-2023-03-07_181209-ollyloughnan.jpg",
        "r0-2023-03-07_185753-eleyp01.jpg",
        "r0-2023-03-07_223850-hardiesuedaoyu.jpg",
        "r0-2023-03-07_233538-awicks10.jpg",
        "r0-2023-03-08_073616-timocles.copland.jpg",
        "r0-2023-03-09_185006-eleyp01.jpg",
        "r0-2023-03-09_195509-matt_daly.jpg",
        "r0-2023-03-10_181641-eleyp01.jpg",
        "r0-2023-03-10_194920-timocles.copland.jpg",
        "r0-2023-03-10_195841-jdswalker.jpg",
        "r0-2023-03-11_091854-ollyloughnan.jpg",
        "r0-2023-03-11_102802-rcandrews555.jpg",
        "r0-2023-03-11_111920-maxjhalden.jpg",
        "r0-2023-03-12_112624-matt_daly.jpg",
        "r0-2023-03-12_151517-awicks10.jpg",
        "r0-2023-03-13_123733-matt_daly.jpg",
        "r0-2023-03-13_193741-eleyp01.jpg",
        "r0-2023-03-13_193826-tom.tulett.jpg",
        "r0-2023-03-13_225515-awicks10.jpg",
        "r0-2023-03-14_152100-hardiesuedaoyu.jpg",
        "r0-2023-03-14_222152-awicks10.jpg",
        "r0-2023-03-15_182723-maxjhalden.jpg",
        "r0-2023-03-15_182725-maxjhalden.jpg",
        "r0-2023-03-15_183457-awicks10.jpg",
        "r0-2023-03-16_190639-timocles.copland.jpg",
        "r0-2023-03-16_190737-ollyloughnan.jpg",
        "r0-2023-03-16_200717-jdswalker.jpg",
        "r0-2023-03-20_174901-ollyloughnan.jpg",
        "r0-2023-03-20_223456-hardiesuedaoyu.jpg",
        "r0-2023-03-21_081144-timocles.copland.jpg",
        "r0-2023-03-21_215306-jdswalker.jpg",
        "r0-2023-03-22_180521-ultimate.jpg",
        "r0-2023-03-23_195514-maxjhalden.jpg",
        "r0-2023-03-23_205502-hardiesuedaoyu.jpg",
        "r0-2023-03-23_205728-hardiesuedaoyu.jpg",
        "r0-2023-03-26_220201-tom.bissett.jpg",
        "r0-2023-03-26_225126-awicks10.jpg",
        "r0-2023-03-27_092518-robswan.jpg",
        "r0-2023-03-27_192058-timocles.copland.jpg",
        "r0-2023-03-27_200736-maxjhalden.jpg",
        "r0-2023-03-30_190816-maxjhalden.jpg",
        "r0-2023-03-30_191927-jdswalker.jpg",
        "r0-2023-03-30_193456-timocles.copland.jpg",
        "r0-2023-03-30_194405-tom.bissett.jpg",
        "r0-2023-04-01_115912-matt_daly.jpg",
        "r0-2023-04-01_123626-jdswalker.jpg",
        "r0-2023-04-03_195615-matt_daly.jpg",
        "r0-2023-04-04_180224-tom.tulett.jpg",
        "r0-2023-04-04_200939-tom.bissett.jpg",
        "r0-2023-04-06_174630-hardiesuedaoyu.jpg",
        "r0-2023-04-06_211356-timocles.copland.jpg",
        "r0-2023-04-07_142956-matt_daly.jpg",
        "r0-2023-04-07_142957-matt_daly.jpg",
        "r0-2023-04-07_163811-maxjhalden.jpg",
        "r0-2023-04-07_163812-maxjhalden.jpg",
        "r0-2023-04-07_164059-tom.bissett.jpg",
        "r0-2023-04-08_080354-jirehloojr.jpg",
        "r0-2023-04-09_154648-jirehloojr.jpg",
        "r0-2023-04-10_131543-ultimate.jpg",
        "r0-2023-04-10_195424-timocles.copland.jpg",
        "r0-2023-04-10_195534-matt_daly.jpg",
        "r0-2023-04-10_195805-maxjhalden.jpg",
        "r0-2023-04-11_172255-ollyloughnan.jpg",
        "r0-2023-04-12_162737-jdswalker.jpg",
        "r0-2023-04-15_115810-josh.howard.jpg",
        "r0-2023-04-15_151249-jdswalker.jpg",
        "r0-2023-04-17_165021-hardiesuedaoyu.jpg",
        "r0-2023-04-17_185715-timocles.copland.jpg",
        "r0-2023-04-17_190017-maxjhalden.jpg",
        "r0-2023-04-17_193149-matt_daly.jpg",
        "r0-2023-04-17_205731-tom.bissett.jpg",
        "r0-2023-04-18_161339-ollyloughnan.jpg",
        "r0-2023-04-18_191019-hardiesuedaoyu.jpg",
        "r0-2023-04-18_201401-awicks10.jpg",
        "r0-2023-04-18_214813-tom.bissett.jpg",
    ];

    res.status(200).json({
        // files: images.map(image => `/images/sweaty-selfies/${image}`)
        files: images
    })
}