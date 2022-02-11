from django.db import models
from django.utils import timezone

def upload_to(instance, filename):
    return 'media/{filename}'.format(filename=filename)

class Projects(models.Model):
    name = models.CharField(max_length=100)
    project_image = models.ImageField(('Image'), upload_to=upload_to, default='media/default.jpg', blank=True, null=True)
    live_demo = models.TextField(blank=True,null=True)
    github = models.TextField(blank=True,null=True)
    

    def __str__(self):
        return self.name 
    

class Feedback(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    mesage = models.TextField()
    project_image = models.ImageField(('Image'), upload_to=upload_to, default='media/default.jpg', blank=True, null=True)
    
    def __str__(self):
        return self.first_name

