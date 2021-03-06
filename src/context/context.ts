import React from 'react';
import { IData } from '../data/data';

const PortfolioContext = React.createContext<IData>({} as any); // Undefined default value

export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;

export default PortfolioContext;
