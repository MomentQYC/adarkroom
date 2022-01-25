/**
 Module for triggering marketing messages
 @author mtownsend
 @since Jan 2021
*/

Events.Marketing = [{
  /* Play Penrose! */
  title: _('Penrose'),
  isAvailable: () => !$SM.get('marketing.penrose'),
  scenes: {
    'start': {
      text: [
        _('出现了非常奇怪的撞击声。'),
        _('有一种非同寻常的吸引力。')
      ],
      notification: _('出现了一种奇怪的撞击声。然后就消失了'),
      blink: true,
      buttons: {
        'give in': {
          text: _('想查看但被鲸呆人拉住'),
          onClick: () => {
            $SM.set('marketing.penrose', true);
          },
          //link: 'https://penrose.doublespeakgames.com/?utm_source=adarkroom&utm_medium=crosspromote&utm_campaign=event'
          link: 'https://github.yateam.cc/jingbao'
        },
        'ignore': {
          text: _('ignore it'),
          nextScene: 'end'
        }
      }
    }
  },
  audio: AudioLibrary.EVENT_NOISES_INSIDE
}];
