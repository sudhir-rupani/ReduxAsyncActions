import React from 'react'
import Channel from '../containers/Channel'
import Button from '../containers/Button'
const ChannelsField = () => (

  <div className="row" >
    <Channel channelName="BBC" channelString="bbc-news" />
    <Channel channelName="CNBC" channelString="cnbc" />
    <Channel channelName="CNN" channelString="cnn" />
    <Channel channelName="FT" channelString="financial-times" />
    <Channel channelName="ESPN" channelString="espn" />
    <Channel channelName="TIME" channelString="time" />
    <Button />
  </div>
);

export default ChannelsField;

