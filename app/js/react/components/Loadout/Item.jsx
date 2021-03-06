import React from 'react';
import { EnumToString } from '../../EnumToString';
import { ItemTooltip } from '../Tooltips';
import { Config } from '../../../services';

export class Item extends React.Component {
    constructor() {
        super();
        this.state = {
            showTooltip: false
        };
    }

    render() {
        let backgroundPath, iconPath, rarityText;

        const { item } = this.props;

        if (!item || item.empty) {
            backgroundPath = `${
                Config.basePath
            }images/template_addon_empty.png`;
        } else {
            rarityText = EnumToString.rarity(item.rarity);
            backgroundPath = `${
                Config.basePath
            }images/template_addon_${rarityText
                .toLowerCase()
                .replace(/\s/, '')}.png`;
            iconPath = `${Config.basePath}images/items/${item.image}.png`;
        }

        return (
            <div
                className={`item ${
                    this.state.showTooltip ? 'show-tooltip' : ''
                } ${this.props.selected ? 'selected' : ''}`}
            >
                <div
                    className="hitbox"
                    onClick={this.onClick.bind(this)}
                    onMouseOver={this.onMouseOver.bind(this)}
                    onMouseOut={this.onMouseOut.bind(this)}
                />
                {!!item &&
                    !item.empty && (
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
                        src={`${Config.basePath}images/addon_selected.png`}
                    />
                    <img className="rarity" src={backgroundPath} />
                </div>
                {!!item &&
                    !item.empty &&
                    this.state.showTooltip && <ItemTooltip item={item} />}
            </div>
        );
    }

    onClick() {
        this.props.onClick(this.props.item, this.props.index);
    }

    onMouseOver() {
        if (!this.state.showTooltip) {
            this.setState({
                showTooltip: true
            });
        }
    }

    onMouseOut() {
        this.setState({
            showTooltip: false
        });
    }
}
