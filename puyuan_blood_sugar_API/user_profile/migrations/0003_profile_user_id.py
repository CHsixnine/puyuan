# Generated by Django 3.0.3 on 2020-02-07 10:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_profile', '0002_remove_profile_user_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='user_id',
            field=models.CharField(blank=True, max_length=64),
        ),
    ]
