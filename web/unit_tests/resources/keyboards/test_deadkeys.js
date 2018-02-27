if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_test_deadkeys());
}
function Keyboard_test_deadkeys()
{
  var modCodes = keyman.osk.modifierCodes;
  var keyCodes = keyman.osk.keyCodes;

  this.KI="Keyboard_test_deadkeys";
  this.KN="Keyman Deadkey Stress-Tester";
  this.KMINVER="10.0";
  this.KV={F:' 1em "Arial"',K102:0};
  this.KDU=0;
  this.KLS={

  };
  this.KV.BK=(function(x){
    var
      empty=Array.apply(null, Array(65)).map(String.prototype.valueOf,""),
      result=[], v, i,
      modifiers=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];
    for(i=modifiers.length-1;i>=0;i--) {
      v = x[modifiers[i]];
      if(v || result.length > 0) {
        result=(v ? v : empty).slice().concat(result);
      }
    }
    return result;
  })(this.KLS);
  this.KH='';
  this.KM=0;
  this.KBVER="1.0";
  this.KMBM=modCodes.SHIFT /* 0x0010 */;
  this.s_deadnums="..........";
  this.s_livenums="0123456789";
  this.s_liveQwerty="qwerty";
  this.s_deadQwerty="......";
  this.KVER="10.0.1014.0";
  this.gs=function(t,e) {
    return this.g_main(t,e);
  };
  this.g_main=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)&&k.KCM(6,t,"(o)",3)&&k.KDM(3,t,18)&&k.KCM(3,t,"(o)",3)) {   // Line 52
      r=m=1;
      k.KO(6,t,"dk(o)");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)&&k.KDM(3,t,18)&&k.KCM(3,t,"(m)",3)) {   // Line 46
      r=m=1;
      k.KO(3,t,"dk(m)");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)&&k.KCM(3,t,"(n)",3)&&k.KDM(0,t,18)) {   // Line 49
      r=m=1;
      k.KO(3,t,"dk(n)");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)&&k.KDM(0,t,16)&&k.KDM(0,t,17)) {   // Line 41
      r=m=1;
      k.KO(0,t,"(a)-(s)");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)&&k.KDM(0,t,17)&&k.KDM(0,t,16)) {   // Line 42
      r=m=1;
      k.KO(0,t,"(s)+(a)");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_0 /* 0x30 */)) {   // Line 65
      r=m=1;
      k.KDO(0,t,0);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_1 /* 0x31 */)) {   // Line 66
      r=m=1;
      k.KDO(0,t,1);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)) {   // Line 67
      r=m=1;
      k.KDO(0,t,2);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)) {   // Line 68
      r=m=1;
      k.KDO(0,t,3);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)) {   // Line 69
      r=m=1;
      k.KDO(0,t,4);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)) {   // Line 70
      r=m=1;
      k.KDO(0,t,5);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)) {   // Line 71
      r=m=1;
      k.KDO(0,t,6);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_7 /* 0x37 */)) {   // Line 72
      r=m=1;
      k.KDO(0,t,7);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)) {   // Line 73
      r=m=1;
      k.KDO(0,t,8);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_9 /* 0x39 */)) {   // Line 74
      r=m=1;
      k.KDO(0,t,9);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_SLASH /* 0xBF */)) {   // Line 126
      r=m=1;
      k.KO(0,t,"ab    > (a)(b)          tests basic deadkey\rb     > (b)             only matches if \"a\" not pressed first\rbb    > (b)+(b)         Missing deadkey does not trigger match.\rbab   > (b)+(a)+(b)     deadkey at end of context\rac    > x               tests basic deadkey\rade   > (a)(d)(e)       deadkey at start of context\rfade  > (f)-(a)-(d)-(e) deadkey in middle of context\ras.   > (a)-(s)         defined deadkey order (1/2)\rsa.   > (s)+(a)         defined deadkey order (2/2)\rm.    > dk(m)           deadkey output then letters\rn.    > dk(n)           letters output then deadkey\ro.    > dk(o)           letters, deadkey, letters\rpqr   > (p)(q)(r)       deadkey, unmatched, letters\rPQR   > (P)(Q)(R)       deadkey, deadkey, match, match\r12bb  > success         deadkey reordering (with the following)\r21bb  > success         \r21b   > dead2           \r34bb  > success         \r43bb  > success         \rABCDE > success         deadkey output before match(group) rule\r1.    > #1              deadkey matched by any\rq!    > ?               same as above, with extra deadkey output.\rq!.   > (qq)            deadkey matched by context() in context\r\r");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)) {   // Line 94
      r=m=1;
      k.KDO(0,t,16);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_B /* 0x42 */)&&k.KDM(0,t,16)) {   // Line 95
      r=m=1;
      k.KO(0,t,"ab");
      k.KDO(-1,t,21);
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)&&k.KDM(0,t,22)) {   // Line 96
      r=m=1;
      k.KO(0,t,"abc");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)&&k.KCM(3,t,"abc",3)) {   // Line 97
      r=m=1;
      k.KO(3,t,"$abc$d");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)&&k.KCM(3,t,"ab",2)&&k.KDM(1,t,23)&&k.KCM(1,t,"d",1)) {   // Line 98
      r=m=1;
      k.KO(3,t,"success");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_P /* 0x50 */)) {   // Line 59
      r=m=1;
      k.KDO(0,t,20);
      k.KDO(-1,t,20);
      k.KO(-1,t,"(P)");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Q /* 0x51 */)&&k.KDM(3,t,20)&&k.KCM(3,t,"(P)",3)) {   // Line 60
      r=m=1;
      k.KO(3,t,"(P)(Q)");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)&&k.KDM(6,t,20)&&k.KDM(6,t,20)&&k.KCM(6,t,"(P)(Q)",6)) {   // Line 62
      r=m=1;
      k.KO(6,t,"ERROR");
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)&&k.KDM(6,t,20)&&k.KCM(6,t,"(P)(Q)",6)) {   // Line 61
      r=m=1;
      k.KO(6,t,"(P)(Q)(R)");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)) {   // Line 19
      r=m=1;
      k.KDO(0,t,16);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)&&k.KDM(5,t,2)&&k.KCM(5,t,"dead1",5)) {   // Line 85
      r=m=1;
      k.KO(5,t,"ERROR");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)&&k.KDM(5,t,1)&&k.KCM(5,t,"dead2",5)) {   // Line 86
      r=m=1;
      k.KO(5,t,"success");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)&&k.KDM(5,t,4)&&k.KCM(5,t,"dead3",5)) {   // Line 90
      r=m=1;
      k.KO(5,t,"success");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)&&k.KDM(5,t,3)&&k.KCM(5,t,"dead4",5)) {   // Line 91
      r=m=1;
      k.KO(5,t,"ERROR");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)&&k.KCM(3,t,"(b)",3)&&k.KDM(0,t,16)) {   // Line 25
      r=m=1;
      k.KO(3,t,"(b)+(a)+(b)");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)&&k.KCM(3,t,"(b)",3)) {   // Line 24
      r=m=1;
      k.KO(3,t,"(b)+(b)");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)&&k.KDM(0,t,16)) {   // Line 20
      r=m=1;
      k.KO(0,t,"(a)(b)");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)&&k.KDM(0,t,2)) {   // Line 83
      r=m=1;
      k.KO(0,t,"dead2");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)&&k.KDM(0,t,1)) {   // Line 84
      r=m=1;
      k.KO(0,t,"dead1");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)&&k.KDM(0,t,4)) {   // Line 88
      r=m=1;
      k.KO(0,t,"dead4");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)&&k.KDM(0,t,3)) {   // Line 89
      r=m=1;
      k.KO(0,t,"dead3");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)) {   // Line 21
      r=m=1;
      k.KO(0,t,"(b)");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)&&k.KDM(0,t,16)) {   // Line 28
      r=m=1;
      k.KO(0,t,"x");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)) {   // Line 31
      r=m=1;
      k.KO(0,t,"d");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KCM(2,t,"f",1)&&k.KDM(1,t,16)&&k.KCM(1,t,"d",1)) {   // Line 36
      r=m=1;
      k.KO(2,t,"(f)-(a)-(d)-(e)");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)&&k.KDM(1,t,16)&&k.KCM(1,t,"d",1)) {   // Line 35
      r=m=1;
      k.KO(1,t,"(a)(d)(e)");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)) {   // Line 32
      r=m=1;
      k.KO(0,t,"f");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)) {   // Line 45
      r=m=1;
      k.KDO(0,t,18);
      k.KO(-1,t,"(m)");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)) {   // Line 48
      r=m=1;
      k.KO(0,t,"(n)");
      k.KDO(-1,t,18);
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)) {   // Line 51
      r=m=1;
      k.KO(0,t,"(o)");
      k.KDO(-1,t,18);
      k.KO(-1,t,"(o)");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_P /* 0x50 */)) {   // Line 55
      r=m=1;
      k.KDO(0,t,19);
      k.KDO(-1,t,10);
      k.KO(-1,t,"(p)");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Q /* 0x51 */)&&k.KDM(3,t,10)&&k.KCM(3,t,"(p)",3)) {   // Line 56
      r=m=1;
      k.KO(3,t,"(p)(q)");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)&&k.KDM(6,t,19)&&k.KCM(6,t,"(p)(q)",6)) {   // Line 57
      r=m=1;
      k.KO(6,t,"(p)(q)(r)");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)) {   // Line 39
      r=m=1;
      k.KDO(0,t,17);
    }
    if(m) {
    
      r=this.g_dead_reorder(t,e);
    }
    if(!m&&k.KIK(e)) {
      r=1;
      r=this.g_qwerty_out(t,e);
    }
    return r;
  };
  this.g_dead_reorder=function(t,e) {
    var k=KeymanWeb,r=1,m=0;
    if(k.KCM(6,t,"$abc$d",6)) {   // Line 135
      m=1;
      k.KO(6,t,"ab");
      k.KDO(-1,t,23);
      k.KO(-1,t,"d");
    }
    else if(k.KCM(2,t,"ab",2)&&k.KDM(0,t,21)) {   // Line 134
      m=1;
      k.KDO(2,t,22);
    }
    else if(k.KDM(0,t,2)&&k.KDM(0,t,1)) {   // Line 131
      m=1;
      k.KDO(0,t,1);
      k.KDO(-1,t,2);
    }
    else if(k.KDM(0,t,3)&&k.KDM(0,t,4)) {   // Line 132
      m=1;
      k.KDO(0,t,4);
      k.KDO(-1,t,3);
    }
    return r;
  };
  this.g_qwerty_out=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)) {   // Line 146
      r=m=1;
      k.KO(0,t,"e");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Q /* 0x51 */)) {   // Line 144
      r=m=1;
      k.KO(0,t,"q");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)) {   // Line 147
      r=m=1;
      k.KO(0,t,"r");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)) {   // Line 148
      r=m=1;
      k.KO(0,t,"t");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)) {   // Line 145
      r=m=1;
      k.KO(0,t,"w");
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)) {   // Line 149
      r=m=1;
      k.KO(0,t,"y");
    }
    return r;
  };
}