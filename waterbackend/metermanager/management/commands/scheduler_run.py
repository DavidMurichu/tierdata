from django.core.management.base import BaseCommand
from metermanager.schedulrer import run_periodically
from metermanager.task import update_meters

class Command(BaseCommand):
    help = 'Start the scheduler to run tasks periodically'

    def handle(self, *args, **options):
        self.stdout.write('Starting scheduler...')
        run_periodically(5, update_meters)
        self.stdout.write('Scheduler started.')