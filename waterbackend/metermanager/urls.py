# myapp/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MeterViewSet, start_scheduler

router = DefaultRouter()
router.register(r'meters', MeterViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('start-scheduler', start_scheduler, name='start_scheduler'),
]
