from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('codelines', views.CodelinesView)
router.register('snippets', views.SnippetsView)


urlpatterns = [
    path('', include(router.urls))
]