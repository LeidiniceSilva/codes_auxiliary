#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.com'
#__date__        = '06/09/19'
#__description__ = 'Plot maps olam and obs database'


'reinit'
'set display color white'
'c'

'sdfopen pr_Amon_CRU-TS3.22_observation_198201-201212_new_mmm_neb.nc'
'set mpdset mresbr'
'set mproj scaled'
'set map 1 1 8'
'set vpage 0 11 0 8.5'
'set parea 1 4 4.5 8'
'set strsiz 0.20'
'set string 1 l 8'
'draw string 1 8.2 A)'
'set grads off'
'set grid off'
'set gxout shaded'
'set xlab off'
'set ylab on'
'set xlopts 1 4 0.20'
'set ylopts 1 4 0.20'
'set ylint 3'
'set xlint 3'

'define a1=ave(pr,t=3,t=5)'
'define a2=ave(pr,t=15,t=17)'
'define a3=ave(pr,t=27,t=29)'
'define a4=ave(pr,t=39,t=41)'
'define a5=ave(pr,t=51,t=53)'
'define a6=ave(pr,t=63,t=65)'
'define a7=ave(pr,t=75,t=77)'
'define a8=ave(pr,t=87,t=89)'
'define a9=ave(pr,t=99,t=101)'
'define a10=ave(pr,t=111,t=113)'
'define a11=ave(pr,t=123,t=125)'
'define a12=ave(pr,t=135,t=137)'
'define a13=ave(pr,t=147,t=149)'
'define a14=ave(pr,t=159,t=161)'
'define a15=ave(pr,t=171,t=173)'
'define a16=ave(pr,t=183,t=185)'
'define a17=ave(pr,t=195,t=197)'
'define a18=ave(pr,t=207,t=209)'
'define a19=ave(pr,t=219,t=221)'
'define a20=ave(pr,t=231,t=233)'
'define a21=ave(pr,t=243,t=245)'
'define a22=ave(pr,t=255,t=257)'
'define a23=ave(pr,t=267,t=269)'
'define a24=ave(pr,t=279,t=281)'
'define a25=ave(pr,t=291,t=292)'
'define a26=ave(pr,t=303,t=305)'
'define a27=ave(pr,t=315,t=317)'
'define a28=ave(pr,t=327,t=329)'
'define a29=ave(pr,t=339,t=341)'
'define a30=ave(pr,t=351,t=353)'
'define a31=ave(pr,t=363,t=365)'
'define amam=(a1+a2+a3+a4+a5+a6+a7+a8+a9+a10+a11+a12+a13+a14+a15+a16+a17+a18+a19+a20+a21+a22+a23+a24+a25+a26+a27+a28+a29+a30+a31)/(31)'

'color.gs -gxout shaded -kind white->rainbow -levs 0 5 10 15 20 25 30 35 40 50 60 70 80 100 150 200'
'd amam'
'draw title CRU'
'draw ylab MAM'

********

'set vpage 0 11 0 8.5'
'set parea 1 4 0.6 4.1'
'set strsiz 0.20'
'set string 1 l 8'
'draw string 1 4.3 D)'
'set grads off'
'set grid off'
'set gxout shaded'
'set xlab on'
'set ylab on'
'set xlopts 1 4 0.20'
'set ylopts 1 4 0.20'
'set ylint 3'
'set xlint 3'

'define b1=ave(pr,t=6,t=8)'
'define b2=ave(pr,t=18,t=20)'
'define b3=ave(pr,t=30,t=32)'
'define b4=ave(pr,t=42,t=44)'
'define b5=ave(pr,t=54,t=56)'
'define b6=ave(pr,t=66,t=68)'
'define b7=ave(pr,t=78,t=80)'
'define b8=ave(pr,t=90,t=92)'
'define b9=ave(pr,t=102,t=104)'
'define b10=ave(pr,t=114,t=116)'
'define b11=ave(pr,t=126,t=128)'
'define b12=ave(pr,t=138,t=140)'
'define b13=ave(pr,t=150,t=152)'
'define b14=ave(pr,t=162,t=164)'
'define b15=ave(pr,t=174,t=176)'
'define b16=ave(pr,t=186,t=188)'
'define b17=ave(pr,t=198,t=200)'
'define b18=ave(pr,t=210,t=212)'
'define b19=ave(pr,t=222,t=224)'
'define b20=ave(pr,t=234,t=236)'
'define b21=ave(pr,t=246,t=248)'
'define b22=ave(pr,t=258,t=260)'
'define b23=ave(pr,t=270,t=272)'
'define b24=ave(pr,t=282,t=284)'
'define b25=ave(pr,t=294,t=296)'
'define b26=ave(pr,t=306,t=308)'
'define b27=ave(pr,t=318,t=320)'
'define b28=ave(pr,t=330,t=332)'
'define b29=ave(pr,t=342,t=344)'
'define b30=ave(pr,t=354,t=356)'
'define b31=ave(pr,t=366,t=368)'
'define bjja=(b1+b2+b3+b4+b5+b6+b7+b8+b9+b10+b11+b12+b13+b14+b15+b16+b17+b18+b19+b20+b21+b22+b23+b24+b25+b26+b27+b28+b29+b30+b31)/(31)'


'color.gs -gxout shaded -kind white->rainbow -levs 0 5 10 15 20 25 30 35 40 50 60 70 80 100 150 200'
'd bjja'
'draw ylab JJA'
'close 1'

**************

'sdfopen precip_controle_1982_2012_chen_g2_neb_new_REAL_ok_full_negcor_monsum_noocean.nc'
'set mpdset mresbr'
'set mproj scaled'
'set map 1 1 7'
'set vpage 0 11 0 8.5'
'set parea 4 7 4.5 8'
'set strsiz 0.20'
'set string 1 l 8'
'draw string 4 8.2 B)'
'set grads off'
'set grid off'
'set gxout shaded'
'set xlab off'
'set ylab off'

'define c1=ave(precip,t=3,t=5)'
'define c2=ave(precip,t=15,t=17)'
'define c3=ave(precip,t=27,t=29)'
'define c4=ave(precip,t=39,t=41)'
'define c5=ave(precip,t=51,t=53)'
'define c6=ave(precip,t=63,t=65)'
'define c7=ave(precip,t=75,t=77)'
'define c8=ave(precip,t=87,t=89)'
'define c9=ave(precip,t=99,t=101)'
'define c10=ave(precip,t=111,t=113)'
'define c11=ave(precip,t=123,t=125)'
'define c12=ave(precip,t=135,t=137)'
'define c13=ave(precip,t=147,t=149)'
'define c14=ave(precip,t=159,t=161)'
'define c15=ave(precip,t=171,t=173)'
'define c16=ave(precip,t=183,t=185)'
'define c17=ave(precip,t=195,t=197)'
'define c18=ave(precip,t=207,t=209)'
'define c19=ave(precip,t=219,t=221)'
'define c20=ave(precip,t=231,t=233)'
'define c21=ave(precip,t=243,t=245)'
'define c22=ave(precip,t=255,t=257)'
'define c23=ave(precip,t=267,t=269)'
'define c24=ave(precip,t=279,t=281)'
'define c25=ave(precip,t=291,t=292)'
'define c26=ave(precip,t=303,t=305)'
'define c27=ave(precip,t=315,t=317)'
'define c28=ave(precip,t=327,t=329)'
'define c29=ave(precip,t=339,t=341)'
'define c30=ave(precip,t=351,t=353)'
'define c31=ave(precip,t=363,t=365)'
'define cmam=(c1+c2+c3+c4+c5+c6+c7+c8+c9+c10+c11+c12+c13+c14+c15+c16+c17+c18+c19+c20+c21+c22+c23+c24+c25+c26+c27+c28+c29+c30+c31)/(31)'

'color.gs -gxout shaded -kind white->rainbow -levs 0 5 10 15 20 25 30 35 40 50 60 70 80 100 150 200'
'd cmam'
'draw title OLAM_Chen'

**************

'set vpage 0 11 0 8.5'
'set parea 4 7 0.6 4.1'
'set strsiz 0.20'
'set string 1 l 8'
'draw string 4 4.3 E)'
'set grads off'
'set grid off'
'set gxout shaded'
'set xlab on'
'set ylab off'
'set xlint 3'

'define d1=ave(precip,t=6,t=8)'
'define d2=ave(precip,t=18,t=20)'
'define d3=ave(precip,t=30,t=32)'
'define d4=ave(precip,t=42,t=44)'
'define d5=ave(precip,t=54,t=56)'
'define d6=ave(precip,t=66,t=68)'
'define d7=ave(precip,t=78,t=80)'
'define d8=ave(precip,t=90,t=92)'
'define d9=ave(precip,t=102,t=104)'
'define d10=ave(precip,t=114,t=116)'
'define d11=ave(precip,t=126,t=128)'
'define d12=ave(precip,t=138,t=140)'
'define d13=ave(precip,t=150,t=152)'
'define d14=ave(precip,t=162,t=164)'
'define d15=ave(precip,t=174,t=176)'
'define d16=ave(precip,t=186,t=188)'
'define d17=ave(precip,t=198,t=200)'
'define d18=ave(precip,t=210,t=212)'
'define d19=ave(precip,t=222,t=224)'
'define d20=ave(precip,t=234,t=236)'
'define d21=ave(precip,t=246,t=248)'
'define d22=ave(precip,t=258,t=260)'
'define d23=ave(precip,t=270,t=272)'
'define d24=ave(precip,t=282,t=284)'
'define d25=ave(precip,t=294,t=296)'
'define d26=ave(precip,t=306,t=308)'
'define d27=ave(precip,t=318,t=320)'
'define d28=ave(precip,t=330,t=332)'
'define d29=ave(precip,t=342,t=344)'
'define d30=ave(precip,t=354,t=356)'
'define d31=ave(precip,t=366,t=368)'
'define djja=(d1+d2+3+d4+d5+d6+d7+d8+d9+d10+d11+d12+d13+d14+d15+d16+d17+d18+d19+d20+d21+d22+d23+d24+d25+d26+d27+d28+d29+d30+d31)/(31)'

'color.gs -gxout shaded -kind white->rainbow -levs 5 10 15 20 25 30 35 40 45 50 60 70 80 100 150 200'
'd djja'
'close 1'

**************

'sdfopen precip_controle_1982_2012_harr_g2_neb_new_REAL_ok_full_negcor_monsum_noocean.nc'
'set mpdset mresbr'
'set mproj scaled'
'set map 1 1 7'
'set vpage 0 11 0 8.5'
'set parea 7 10 4.5 8'
'set strsiz 0.20'
'set string 1 l 8'
'draw string 7 8.2 C)'
'set grads off'
'set grid off'
'set gxout shaded'
'set xlab off'
'set ylab off'

'define e1=ave(precip,t=3,t=5)'
'define e2=ave(precip,t=15,t=17)'
'define e3=ave(precip,t=27,t=29)'
'define e4=ave(precip,t=39,t=41)'
'define e5=ave(precip,t=51,t=53)'
'define e6=ave(precip,t=63,t=65)'
'define e7=ave(precip,t=75,t=77)'
'define e8=ave(precip,t=87,t=89)'
'define e9=ave(precip,t=99,t=101)'
'define e10=ave(precip,t=111,t=113)'
'define e11=ave(precip,t=123,t=125)'
'define e12=ave(precip,t=135,t=137)'
'define e13=ave(precip,t=147,t=149)'
'define e14=ave(precip,t=159,t=161)'
'define e15=ave(precip,t=171,t=173)'
'define e16=ave(precip,t=183,t=185)'
'define e17=ave(precip,t=195,t=197)'
'define e18=ave(precip,t=207,t=209)'
'define e19=ave(precip,t=219,t=221)'
'define e20=ave(precip,t=231,t=233)'
'define e21=ave(precip,t=243,t=245)'
'define e22=ave(precip,t=255,t=257)'
'define e23=ave(precip,t=267,t=269)'
'define e24=ave(precip,t=279,t=281)'
'define e25=ave(precip,t=291,t=292)'
'define e26=ave(precip,t=303,t=305)'
'define e27=ave(precip,t=315,t=317)'
'define e28=ave(precip,t=327,t=329)'
'define e29=ave(precip,t=339,t=341)'
'define e30=ave(precip,t=351,t=353)'
'define e31=ave(precip,t=363,t=365)'
'define emam=(e1+e2+e3+e4+e5+e6+e7+e8+e9+e10+e11+e12+e13+e14+e15+e16+e17+e18+e19+e20+e21+e22+e23+e24+e25+e26+e27+e28+e29+e30+e31)/(31)'

'color.gs -gxout shaded -kind white->rainbow -levs 0 5 10 15 20 25 30 35 40 50 60 70 80 100 150 200'
'd emam'
'draw title OLAM_Harr'

**************

'set vpage 0 11 0 8.5'
'set parea 7 10 0.6 4.1'
'set strsiz 0.20'
'set string 1 l 8'
'draw string 7 4.3 F)'
'set grads off'
'set grid off'
'set gxout shaded'
'set xlab on'
'set ylab off'
'set xlint 3'

'define f1=ave(precip,t=6,t=8)'
'define f2=ave(precip,t=18,t=20)'
'define f3=ave(precip,t=30,t=32)'
'define f4=ave(precip,t=42,t=44)'
'define f5=ave(precip,t=54,t=56)'
'define f6=ave(precip,t=66,t=68)'
'define f7=ave(precip,t=78,t=80)'
'define f8=ave(precip,t=90,t=92)'
'define f9=ave(precip,t=102,t=104)'
'define f10=ave(precip,t=114,t=116)'
'define f11=ave(precip,t=126,t=128)'
'define f12=ave(precip,t=138,t=140)'
'define f13=ave(precip,t=150,t=152)'
'define f14=ave(precip,t=162,t=164)'
'define f15=ave(precip,t=174,t=176)'
'define f16=ave(precip,t=186,t=188)'
'define f17=ave(precip,t=198,t=200)'
'define f18=ave(precip,t=210,t=212)'
'define f19=ave(precip,t=222,t=224)'
'define f20=ave(precip,t=234,t=236)'
'define f21=ave(precip,t=246,t=248)'
'define f22=ave(precip,t=258,t=260)'
'define f23=ave(precip,t=270,t=272)'
'define f24=ave(precip,t=282,t=284)'
'define f25=ave(precip,t=294,t=296)'
'define f26=ave(precip,t=306,t=308)'
'define f27=ave(precip,t=318,t=320)'
'define f28=ave(precip,t=330,t=332)'
'define f29=ave(precip,t=342,t=344)'
'define f30=ave(precip,t=354,t=356)'
'define f31=ave(precip,t=366,t=368)'
'define fjja=(f1+f2+f3+f4+f5+f6+f7+f8+f9+f10+f11+f12+f13+f14+f15+f16+f17+f18+f19+f20+f21+f22+f23+f24+f25+f26+f27+f28+f29+f30+f31)/(31)'

'color.gs -gxout shaded -kind white->rainbow -levs 0 5 10 15 20 25 30 35 40 50 60 70 80 100 150 200'
'd fjja'

'draw string 10.05 7.25 (mm)'
'run xcbar 10.25 10.50 2 7 -fw 0.12 -fh 0.18 -line on'

'printim mapa_harr_chen_cru.png white'



