from django.conf.urls import url
from binchgame import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^game/$', views.game, name = 'game'),
#    url(r'dilemma/new', views.dilemma_new, name = 'dilemma_new'),
#    url(r'dilemma/checkgate', views.dilemma_checkgate, name = 'dilemma_checkgate'),
    #url(r'^post/(?P<pk>\d+)/$', views.post_detail, name='post_detail'),
    #url(r'^post/new/$', views.post_new, name='post_new'),
    #url(r'^post/(?P<pk>\d+)/edit/$', views.post_edit, name='post_edit'),
]
