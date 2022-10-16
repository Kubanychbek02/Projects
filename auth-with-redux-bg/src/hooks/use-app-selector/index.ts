import {TypedUseSelectorHook, useSelector} from 'react-redux';

import type reducer from 'src/store/root-reducer'

export type AppState = ReturnType<typeof reducer>

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
