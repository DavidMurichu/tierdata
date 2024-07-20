from django.core.management.base import BaseCommand
from django_celery_beat.models import PeriodicTask, IntervalSchedule
import json

class Command(BaseCommand):
    help = 'Set up periodic tasks for Celery Beat'

    def handle(self, *args, **kwargs):
        # Create or get an interval schedule for hourly tasks
        schedule, created = IntervalSchedule.objects.get_or_create(
            every=1,
            period=IntervalSchedule.HOURS,
        )

        # Create or update the periodic task
        PeriodicTask.objects.get_or_create(
            interval=schedule,
            name='Update meters hourly',
            task='metermanager.tasks.update_meters',
            defaults={
                'enabled': True,
            }
        )

        self.stdout.write(self.style.SUCCESS('Successfully set up periodic tasks'))