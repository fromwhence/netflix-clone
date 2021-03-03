import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import { selectionMap } from '../utils';

export default function Browse() {
  const { films } = useContent('films');
  const { series } = useContent('series');
  const slides = selectionMap({ films, series });
  
  return <BrowseContainer slides={slides} />;
}