import React from 'react';
import PropTypes from 'prop-types';
import { ModalRoot, ModalPage, ModalPageHeader, Group, List, Cell, Counter, HeaderButton } from '@vkontakte/vkui';
import { IS_PLATFORM_ANDROID, IS_PLATFORM_IOS } from '@vkontakte/vkui/dist/lib/platform';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';

// Components
import RoadNumber from '../roadNumber';

const INFO_MODAL_ID = 'info-modal';

const regionInfoModal = ({ setPopout, region }) => (
    <ModalRoot activeModal={INFO_MODAL_ID}>
        <ModalPage
            id={INFO_MODAL_ID}
            onClose={() => setPopout(null)}
            header={
                <ModalPageHeader
                    left={IS_PLATFORM_ANDROID && <HeaderButton onClick={() => setPopout(null)}><Icon24Cancel /></HeaderButton>}
                    right={IS_PLATFORM_IOS && <HeaderButton onClick={() => setPopout(null)}><Icon24Dismiss /></HeaderButton>}
                >
                    {region.name}
                </ModalPageHeader>
            }
        >
            <RoadNumber code={region.codes[0]} />
            <Group title="Статистика по региону" description="Учитываются только леговые автомобили. Дата обновления: 25.06.2019">
                <List>
                    <Cell 
                        description="На 1000 человек."
                        indicator={<Counter type="primary">{region.meta.carCount}</Counter>}
                    >
                        Кол-во машин
                    </Cell>
                    <Cell 
                        description="По кол-ву машин."
                        indicator={<Counter type="primary">{region.meta.postionByCarCount}</Counter>}
                    >
                        Занимаемое место
                    </Cell>
                </List>
            </Group>
        </ModalPage>
    </ModalRoot>
);

regionInfoModal.propTypes = {
    setPopout: PropTypes.func.isRequired,
    region: PropTypes.object.isRequired,
}

export default regionInfoModal;