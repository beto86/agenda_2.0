# Generated by Django 3.1.3 on 2020-12-03 03:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20201201_1745'),
    ]

    operations = [
        migrations.AlterField(
            model_name='member',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to='members_profile'),
        ),
    ]