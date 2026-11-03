from django.contrib import admin
from django.http import JsonResponse
from django.urls import path, include


def home(request):
    return JsonResponse({"message": "Student API", "endpoints": "/api/students/"})


urlpatterns = [
    path("", home),
    path("admin/", admin.site.urls),
    path("api/", include("students.urls")),
]