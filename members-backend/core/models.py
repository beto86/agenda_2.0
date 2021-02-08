from django.db import models
from django.contrib.auth.models import User
from datetime import datetime, timedelta


class Member(models.Model): # a Classe membro sera o professor
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    email = models.EmailField()
    endereco = models.CharField(max_length=200)
    photo = models.ImageField(upload_to='members_profile', blank=True, null=True)

    def __str__(self):
        return self.name + " " + self.surname


class Evento(models.Model):
    titulo = models.CharField(max_length=100)  #charFild tipo de campo para string
    descricao = models.TextField(blank=True, null=True)
    data_evento = models.DateTimeField(verbose_name='Data do Evento')
    data_criacao = models.DateTimeField(auto_now=True) #pega a data atual
    usuario = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.titulo

    def get_data_evento(self):
        return self.data_evento.strftime('%d/%m/%Y %H:%M Hrs')

    def get_data_input_evento(self):
        return self.data_evento.strftime('%Y-%m-%dT%H:%M')

    def get_evento_atrasado(self):
        if self.data_evento < datetime.now():
            return True
        else:
            return False


class EventoEscolar(models.Model):
    titulo = models.CharField(max_length=100)  
    materia = models.CharField(max_length=100)
    professor = models.ForeignKey(Member, on_delete=models.CASCADE, related_name='eventos_Escolar', blank=True, null=True)
    tipoEvento = models.CharField(max_length=100)
    peso = models.IntegerField()
    descricao = models.TextField(blank=True, null=True)
    data_evento = models.DateTimeField()
    data_criacao = models.DateTimeField(auto_now=True) #pega a data atual
    usuario = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.titulo


