import React from 'react';
import { KillerFactory, SurvivorFactory } from '../../factories';
import { KillerTooltip, SurvivorTooltip } from './Tooltips';
import { EnumToString } from '../EnumToString';
import { Types } from '../../data';
import { Link, withRouter } from 'react-router-dom';
import { Config } from '../../services';

class PlayerSelector extends React.Component {
    componentWillMount() {
        const { store, history } = this.props;

        if (!store.type) {
            history.replace('/');
        }
    }

    render() {
        const { type, setPlayer } = this.props.store;

        const data =
            type === Types.KILLER
                ? KillerFactory.toArray()
                : SurvivorFactory.toArray();

        const title = EnumToString.plural(EnumToString.type(type));

        const players = data.map((player, index) => (
            <Link
                to="/build/loadout"
                className="player tooltip-activator"
                key={index}
                onClick={setPlayer.bind(this, player)}
            >
                <div className="outline">
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
                        }images/profile-outline-vertical.png`}
                    />
                    <img
                        className="right"
                        src={`${
                            Config.basePath
                        }images/profile-outline-vertical.png`}
                    />
                </div>
                <img
                    className="profile"
                    src={`${Config.basePath}images/portrait/${
                        player.image
                    }.png`}
                />
                <img
                    className="background"
                    src={`${Config.basePath}images/Profile_Background.png`}
                />
                {type === Types.KILLER ? (
                    <KillerTooltip killer={player} />
                ) : (
                    <SurvivorTooltip survivor={player} />
                )}
            </Link>
        ));

        return (
            <div className="player-selector">
                <h2 className="title">{title}</h2>
                <div className="players">{players}</div>
            </div>
        );
    }
}

export default withRouter(PlayerSelector);
