from django.conf.urls import url,include
from . import views



urlpatterns = [
    url(r'^$', views.index, name='index'),
    

    url(r'^base/', views.base),

    #注册
    url(r'^index/', views.index),
    url(r'^login/', views.login),
    url(r'^register/', views.register),
    url(r'^logout/', views.logout),
    url(r'^captcha', include('captcha.urls')),
    


    url('^indexText', views.indexText, name='indexText'),


    url('^newguide', views.newguide, name='newguide'),
    url('^trust', views.trust, name='trust'),
    url('^infomation', views.infomation, name='infomation'),


    url('^maintz', views.maintz, name='maintz'),
    url('^elseinfo', views.elseinfo, name='elseinfo'),



    url('^userCenter', views.userCenter, name='userCenter'),
    url('^banckAndaccount', views.banckAndaccount, name='banckAndaccount'),


    url(r'^programDetails/(?P<pk>[0-9]+)/$', views.programDetails, name='programDetails'),
    url('^programDetails/(?P<pk>[0-9]+)/buyProgramDetails', views.buyProgramDetails, name='buyProgramDetails'),
    url('^personalProgramDetails', views.personalProgramDetails, name='personalProgramDetails'),
    url('^register1', views.register1, name='register1'),
    url('^login1', views.login1, name='login1'),
    url('^loginYou', views.loginYou, name='loginYou'),


]
'''
url('^indexText', views.indexText, name='indexText'),


    url('^newguide', views.newguide, name='newguide'),
    url('^trust', views.trust, name='trust'),
    url('^infomation', views.infomation, name='infomation'),


    url('^maintz', views.maintz, name='maintz'),
    url('^elseinfo', views.elseinfo, name='elseinfo'),
    url('^userCenter', views.userCenter, name='userCenter'),

'''




