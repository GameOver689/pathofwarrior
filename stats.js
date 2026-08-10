
console.log("stats.js подключен");


/* =========================================
   СИЛА
   ========================================= */

function calculateBaseDamage(strength) {

    let damage = 0;


    /* 10 силы = +10 урона */

    if (strength <= 10) {

        damage = strength;

    }


    /* 11–20 силы:
       +1 урон за каждое очко */

    else if (strength <= 20) {

        damage = strength;

    }


    /* 21–30 силы:
       каждое очко выше 20 даёт +1.5 */

    else if (strength <= 30) {

        damage =
            20 +
            (strength - 20) * 1.5;

    }


    /* После 30:
       каждое очко = +1.5 урона */

    else {

        damage =
            35 +
            (strength - 30) * 1.5;

    }


    return damage;

}


/* =========================================
   ПРОЦЕНТНЫЙ БОНУС СИЛЫ
   ========================================= */

function calculateStrengthMultiplier(strength) {

    if (strength <= 30) {

        return 1;

    }


    const bonusSteps =
        Math.floor((strength - 30) / 5);


    return 1 + bonusSteps * 0.02;

}


/* =========================================
   ИТОГОВЫЙ ФИЗИЧЕСКИЙ УРОН
   ========================================= */

function calculatePhysicalDamage(strength, weaponDamage) {

    const strengthBonus =
        calculateBaseDamage(strength);


    const strengthMultiplier =
        calculateStrengthMultiplier(strength);


    const damageBeforeMultiplier =
        weaponDamage + strengthBonus;


    const finalDamage =
        damageBeforeMultiplier *
        strengthMultiplier;


    return finalDamage;

}

console.log("НОВАЯ ВЕРСИЯ");