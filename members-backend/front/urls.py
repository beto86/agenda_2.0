from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from core.views import MemberViewSet, EventoViewSet, EventoEscolarViewSet
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'members', MemberViewSet)
router.register(r'eventos', EventoViewSet)
router.register(r'eventos_escolar', EventoEscolarViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
