# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2019-07-02 16:04
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DFJJ', '0014_user_pay_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='operatinginfo',
            name='pay_name',
            field=models.CharField(default='', max_length=128, verbose_name='利息账户'),
        ),
        migrations.AlterField(
            model_name='programinfo',
            name='c_time',
            field=models.DateTimeField(auto_now_add=True, verbose_name='创立时间'),
        ),
    ]
