from rest_framework import viewsets
from core.serializers import MemberSerializer, EventoSerializer, EventoEscolarSerializer
from core.models import Member, EventoEscolar, Evento
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.permissions import IsAuthenticated


class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    authentication_classes = [TokenAuthentication, SessionAuthentication, ]
    permission_classes = [IsAuthenticated, ]
 
    def list(self, request, *args, **kwargs):
        queryset = Member.objects.all()
        serializer = MemberSerializer(queryset, many=True)
        return Response(serializer.data)

class EventoViewSet(viewsets.ModelViewSet):
    queryset = Evento.objects.all()
    serializer_class = EventoSerializer
    #authentication_classes = [TokenAuthentication, SessionAuthentication]
    #permission_classes = [IsAuthenticated, ]

    def list(self, request, *args, **kwargs):
        queryset = Evento.objects.all()
        serializer = EventoSerializer(queryset, many=True)
        return Response(serializer.data)


class EventoEscolarViewSet(viewsets.ModelViewSet):
    queryset = EventoEscolar.objects.all()
    serializer_class = EventoEscolarSerializer
    #authentication_classes = [TokenAuthentication, SessionAuthentication]
    #permission_classes = [IsAuthenticated, ]

    def list(self, request, *args, **kwargs):
        queryset = EventoEscolar.objects.all()
        serializer = EventoEscolarSerializer(queryset, many=True)
        return Response(serializer.data)

        