# Generated by Django 3.1.3 on 2020-12-06 23:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_auto_20201205_1913'),
    ]

    operations = [
        migrations.AlterField(
            model_name='eventoescolar',
            name='professor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='eventos_Escolar', to='core.member'),
        ),
    ]