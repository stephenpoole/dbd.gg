import { KillerAddons, SurvivorAddons } from '../data';
import { Addon } from '../models/Addon';
import { ModelFactory } from './base';
import { KillerFactory } from './PlayerFactory';

class AddonFactoryClass extends ModelFactory {
    constructor(addons) {
        super(Addon, addons);
        this.addons = {};
    }
}

class KillerAddonFactoryClass extends AddonFactoryClass {
    constructor() {
        super(KillerAddons);
        this.addonsByKiller = {};
    }

    getByKiller(key) {
        if (KillerFactory.exists(key)) {
            if (!(key in this.addonsByKiller)) {
                const addons = this.toArray().filter(
                    addon => addon.owner === key
                );
                this.addonsByKiller[key] = addons;
            }

            return this.addonsByKiller[key];
        }
        return false;
    }
}

export const KillerAddonFactory = new KillerAddonFactoryClass();

class SurvivorAddonFactoryClass extends AddonFactoryClass {
    constructor() {
        super(SurvivorAddons);
    }
}

export const SurvivorAddonFactory = new SurvivorAddonFactoryClass();

class AllAddonFactoryClass extends AddonFactoryClass {
    constructor() {
        super(Object.assign({}, SurvivorAddons, KillerAddons));
    }
}

export const AllAddonFactory = new AllAddonFactoryClass();
