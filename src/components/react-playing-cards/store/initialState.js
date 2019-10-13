import { wordpressState } from './wordpress/wordpress.reducer';
import { systemState } from './system/system.reducer';

const initialState = {
    wordpress: { wordpressState },
    system: { systemState },
};

export default initialState;
