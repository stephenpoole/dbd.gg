import React from 'react';
import { EnumToString } from '../../EnumToString';
import { PerkTooltip } from '../Tooltips';
import { Config } from '../../../services';

export class Perk extends React.Component {
    constructor() {
        super();
        this.state = {
            showTooltip: false
        };
    }

    render() {
        let backgroundPath,
            iconPath,
            rarityText,
            tickCount = 0;

        const { perk } = this.props;

        if (!perk || perk.empty) {
            backgroundPath = `${Config.basePath}images/template_perk_empty.png`;
        } else {
            rarityText = EnumToString.rarity(perk.rarity);
            backgroundPath = `${
                Config.basePath
            }images/template_perk_${rarityText
                .toLowerCase()
                .replace(/\s/, '')}.png`;
            iconPath = `${Config.basePath}images/perks/${perk.image}.png`;
            tickCount = perk.tier;
        }

        return (
            <div
                className={`perk ${
                    this.state.showTooltip ? 'show-tooltip' : ''
                } ${this.props.selected ? 'selected' : ''}`}
            >
                <div className="hitbox" onClick={this.onClick.bind(this)}>
                    <div className="hitbox-inner">
                        <div
                            className="tier1 tier"
                            onMouseOver={this.onMouseOver.bind(this, 1)}
                            onMouseOut={this.onMouseOut.bind(this)}
                        />
                        <div
                            className="tier2 tier"
                            onMouseOver={this.onMouseOver.bind(this, 2)}
                            onMouseOut={this.onMouseOut.bind(this)}
                        />
                        <div
                            className="tier3 tier"
                            onMouseOver={this.onMouseOver.bind(this, 3)}
                            onMouseOut={this.onMouseOut.bind(this)}
                        />
                    </div>
                </div>
                {!!perk &&
                    !perk.empty && (
                        <div className={`ticks show${tickCount}`}>
                            <img
                                className="tick1 tick"
                                src={`${Config.basePath}images/Point_Tick.png`}
                            />
                            <img
                                className="tick2 tick"
                                src={`${Config.basePath}images/Point_Tick.png`}
                            />
                            <img
                                className="tick3 tick"
                                src={`${Config.basePath}images/Point_Tick.png`}
                            />
                        </div>
                    )}
                {!!perk &&
                    !perk.empty && (
                        <div className="foreground">
                            <img src={iconPath} />
                        </div>
                    )}
                <div className="background">
                    <div className="hover">
                        <img
                            className="top"
                            src={`${
                                Config.basePath
                            }images/profile-outline-horizontal.png`}
                        />
                        <img
                            className="bottom"
                            src={`${
                                Config.basePath
                            }images/profile-outline-horizontal.png`}
                        />
                        <img
                            className="left"
                            src={`${
                                Config.basePath
                            }images/profile-outline-horizontal.png`}
                        />
                        <img
                            className="right"
                            src={`${
                                Config.basePath
                            }images/profile-outline-horizontal.png`}
                        />
                    </div>
                    <img
                        className="select"
                        src={`${Config.basePath}images/perk_selected.png`}
                    />
                    <img className="rarity" src={backgroundPath} />
                </div>
                {!!perk &&
                    !perk.empty &&
                    this.state.showTooltip && <PerkTooltip perk={perk} />}
            </div>
        );
    }

    onClick() {
        this.props.onClick(this.props.perk, this.props.index);
    }

    onMouseOver(tier) {
        const { perk } = this.props;
        if (!!perk && perk.tier !== tier && !perk.frozen) {
            perk.setTier(tier);
        }

        if (!this.state.showTooltip) {
            this.setState({
                showTooltip: true
            });
        }
    }

    onMouseOut() {
        const { perk } = this.props;
        if (!!perk && perk.tier !== 3 && !perk.frozen) {
            perk.setTier(3);
        }

        this.setState({
            showTooltip: false
        });
    }
}
