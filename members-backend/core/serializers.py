from rest_framework import serializers
from core.models import Member, Evento, EventoEscolar



class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ['id', 'name', 'surname', 'phone', 'photo']


class EventoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evento
        fields = ['id', 'titulo', 'descricao', 'data_evento', 'data_criacao']


class EventoEscolarSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventoEscolar
        fields = ['id', 'titulo', 'materia', 'tipoEvento', 'peso', 'descricao', 'data_evento', 'data_criacao']