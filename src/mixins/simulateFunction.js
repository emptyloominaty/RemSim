export default {
    data() {
        return {
        }
    },
    methods: {
        simulate(settings) {
            // eslint-disable-next-line no-unused-vars
            let mode = settings.simMode
            // eslint-disable-next-line no-unused-vars
            let tftUseOn = settings.tftUse
            console.log(tftUseOn)
            let timeline=[]
            let rems = 0
            let time = 0
            let gcd = 1.5 / (1 + (settings.statHaste / 100))
            let currentHaste = settings.statHaste
            let rem = [[]]
            // eslint-disable-next-line no-unused-vars
            let totalRems = 0
            let mana = 100
            let manaUsed = 0

            let gcdUsed = 0
            //---------CONFIG--------
            //rsk
            let rskManaCost = 1.5
            let rskCdDefault = 12
            let rskCd = rskCdDefault / (1 + (settings.statHaste / 100))
            let rskOnCd = rskCdDefault  / (1 + (settings.statHaste / 100))
            let rskExtend = 4
            //rem
            let remManaCost = 2.2
            let remCd = 9
            let remOnCd = 9
            let remDuration = 20
            let remChargesMax = 2
            let remCharges = 2
            let remMaxDuration = remDuration * settings.extendRem
            //tft
            let tftCd = 30
            let tftOnCd = 30
            let tftRsk = 9 / (1 + (settings.statHaste / 100))
            let tftRem = 0.5
            //-----------------------

            //---------Loop--------------------------------------------------------
            for (let i=0; i<settings.fightLength; i++) {
                gcdUsed = 0
                //--------BUFFS----------
                //-----------------------
                if (settings.statHaste !== currentHaste ) {
                    rskCd = rskCdDefault / (1 + (currentHaste / 100))
                    gcd = 1.5 / (1 + (currentHaste / 100))
                }
                //-----CDs-----
                if (rskOnCd<rskCd) {
                    rskOnCd+=gcd
                }
                if (tftOnCd<tftCd) {
                    tftOnCd+=gcd
                }

                if (remOnCd<remCd) {
                    remOnCd+=gcd

                    if (remCharges<remChargesMax && remOnCd>=remCd) {
                        remCharges++
                        remOnCd=remCd
                    }
                }
                if (mana<100) {
                    mana += 0.8
                }
                if (mana>100) {
                    mana=100
                }
                if (rems>0) {
                    for (let a = 0; a < rem.length; a++) {
                        rem[a][0] -= gcd
                        if (rem[a][0]<0) {
                            rems--
                            rem.splice(a, 1);
                            rem = rem.filter(function(val){return val});
                        }
                    }
                }
                time += gcd
                //------Use Ability-------
                if (gcdUsed===0) {
                    gcdUsed=1
                    if (remCharges>0) {                 //REM
                        remOnCd=0
                        remCharges--
                        manaUsed += remManaCost
                        mana -= remManaCost
                        rems+=1
                        let remDuration2 = remDuration
                        let remMaxDuration2 = remMaxDuration
                        //Thunder Focus Tea
                        if (tftUseOn==0) {
                            if (tftOnCd>=tftCd) {
                                remDuration2 = remDuration2 + tftRem
                                remMaxDuration2 = (remDuration2 + tftRem) * (settings.extendRem)
                                tftOnCd = 0
                                console.log("tft on rem")
                            }
                        }
                        rem.push([remDuration2,remMaxDuration2])
                        totalRems ++
                    } else if (rskOnCd>=rskCd) {         //RSK
                        rskOnCd=0
                        //Thunder Focus Tea
                        if (tftUseOn==1) {
                            if (tftOnCd >= tftCd) {
                                rskOnCd = tftRsk
                                tftOnCd = 0
                                console.log("tft on rsk")
                            }
                        }
                        manaUsed += rskManaCost
                        mana -= rskManaCost
                        if (rems>0) {
                            for (let a = 0; a < rem.length; a++) {
                                if (rem[a][1]>0) {
                                    if(rem[a][1]>4) {
                                        rem[a][0] += rskExtend
                                        rem[a][1] -= rskExtend
                                    } else {
                                        rem[a][0] += rem[a][1]
                                        rem[a][1] = 0
                                    }

                                }
                            }
                        }
                    }
                }
                //------------------------




                timeline[i] = {id:i,time:time.toFixed(1),rems:rems,mana:mana,manaUsed:manaUsed}
            }
            //--------End of Loop-------------------------------------------------
            return timeline
        }
    }
}